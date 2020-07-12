import * as React from "react"
import styled from "styled-components"
import { albums, generateAlbumData, COLORS } from "../../constants.js"
import { Loading } from "../Loading/Loading.jsx"
import { Error } from "../Error/Error.jsx"
import { Link } from "gatsby"
import { convertStringSyntax } from "../../utils/convertStringSyntax.js"

function AlbumsList() {
  const [fetchStatus, setFetchStatus] = React.useState("pending")
  const [localAlbums, setLocalAlbums] = React.useState([])

  React.useEffect(() => {
    let prevRandom = 0
    const randomLength = Math.floor(Math.random() * 6 + 1)
    const al = Array.from({ length: randomLength }, () => {
      let random = Math.floor(Math.random() * albums.length)
      while (random === prevRandom) {
        random = Math.floor(Math.random() * albums.length)
      }
      prevRandom = random
      return albums[random]
    })

    Promise.allSettled(al.map(a => generateAlbumData(a.artist, a.album)))
      .then(values => {
        // console.log(values)
        setFetchStatus("success")
        setLocalAlbums(values)
      })
      .catch(error => {
        console.log(error)
        setFetchStatus("error")
      })
  }, [])

  return (
    <AlbumsUL>
      {fetchStatus === "pending" ? (
        <Loading />
      ) : fetchStatus === "error" ? (
        <Error />
      ) : (
        localAlbums.map((album, i) => (
          <AlbumDetail key={i}>
            <Link to={`/play/${convertStringSyntax(album.value.title, 'dash')}`} state={album}>
              <ImgWrapper>
                <img
                  src={album.value.imageSrc}
                  alt="album cover"
                  loading="lazy"
                  width="200"
                  height="200"
                />
              </ImgWrapper>
            </Link>
            <div>
              <AlbumTitle>{album.value.title}</AlbumTitle>
              <AlbumArtist>{album.value.artist}</AlbumArtist>
            </div>
          </AlbumDetail>
        ))
      )}
    </AlbumsUL>
  )
}

const AlbumArtist = styled.p`
  font-size: 1.6rem;
  color: ${COLORS.grayLight};
  font-family: "Oxygen", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
`

const AlbumTitle = styled.p`
  font-size: 1.8rem;
`

const AlbumDetail = styled.li`
  padding: 0 1rem;
  position: relative;
`

const AlbumsUL = styled.ul`
  display: flex;
`
const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
`
export { AlbumsList }
