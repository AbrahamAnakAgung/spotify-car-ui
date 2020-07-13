import React from "react"
import styled from "styled-components"
import { convertSecondToMinute } from "../../utils/convertSecondToMinute"
import { COLORS } from "../../constants"
import Icon from "react-icons-kit"
import { play } from "react-icons-kit/ionicons/play"
import { pause } from "react-icons-kit/ionicons/pause"
import { iosSkipbackward } from "react-icons-kit/ionicons/iosSkipbackward"
import { iosSkipforward } from "react-icons-kit/ionicons/iosSkipforward"
import { heart } from "react-icons-kit/fa/heart"
import { random } from "react-icons-kit/fa/random"
import { loop } from "react-icons-kit/iconic/loop"
import { ic_playlist_add } from "react-icons-kit/md/ic_playlist_add"
import { Loading } from "../Loading/Loading"

export const PlayUI = ({ location }) => {
  const [album, setAlbum] = React.useState()

  const [playSong, setPlaySong] = React.useState(false)
  const [playingTrack, setPlayingTrack] = React.useState([])
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [nextTrack, setNextTrack] = React.useState("")
  const [like, setLike] = React.useState(false)

  const handleClick = event => {
    const trackData = [
      event.currentTarget.dataset.trackName,
      Number(event.currentTarget.dataset.trackDuration),
    ]
    setPlayingTrack(trackData)
    setPlaySong(true)
    setIsPlaying(true)
    setNextTrack(event.currentTarget.dataset.nextTrackName)
  }

  const playOrPause = event => setIsPlaying(!isPlaying)

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    setAlbum(location.state.value)
  })

  if (!album) {
    return <Loading />
  } else {
    let { artist, imageSrc, title, tracks } = album
    return (
      <Container>
        {playSong && nextTrack && (
          <NextTrackTitle>
            <span style={{ color: `${COLORS.white}` }}>NEXT:</span>
            <span>{nextTrack}</span>
          </NextTrackTitle>
        )}
        <AlbumDetail>
          <ImgWrapper>
            <img
              src={imageSrc}
              alt={`${title} by ${artist}`}
              loading="lazy"
              width="200"
              height="200"
            />
          </ImgWrapper>
          <div>
            <AlbumTitle>{title}</AlbumTitle>
            <AlbumArtist>{artist}</AlbumArtist>
          </div>
        </AlbumDetail>

        {playSong && (
          <ControlWrapper>
            <TrackTitle>
              <PlayingSong>{playingTrack[0]}</PlayingSong>
              {/* {nextTrack && (
              <p style={{ color: `${COLORS.gray}` }}>NEXT: {nextTrack}</p>
            )} */}
            </TrackTitle>
            <TrackTimeLine />
            <TrackControlTime>
              <TrackTimeBegin>0.00</TrackTimeBegin>
              <TrackTimeLeft>
                -{convertSecondToMinute(playingTrack[1])}
              </TrackTimeLeft>
            </TrackControlTime>
            <Controller>
              <IconWrapper
                className={like ? "like" : ""}
                onClick={() => setLike(!like)}
              >
                <Icon icon={heart} size="24" />
              </IconWrapper>
              <IconWrapper className="play-pause">
                {!isPlaying && (
                  <Icon icon={play} size="48" onClick={playOrPause} />
                )}
                {isPlaying && (
                  <Icon icon={pause} size="48" onClick={playOrPause} />
                )}
              </IconWrapper>
              <IconWrapper className="two-icons">
                <Icon icon={iosSkipbackward} size="32" />
                <Icon icon={iosSkipforward} size="32" />
              </IconWrapper>
              <IconWrapper className="two-icons">
                <Icon icon={random} size="20" />
                <Icon icon={loop} size="20" />
              </IconWrapper>
              <IconWrapper>
                <Icon icon={ic_playlist_add} size="32" />
              </IconWrapper>
            </Controller>
          </ControlWrapper>
        )}

        <TrackWrapper>
          <p style={{ color: `${COLORS.grayLight}` }}>SONGS</p>
          <Line />
          <ul>
            {tracks.map((track, idx) => (
              <TrackDetail
                key={track["@attr"].rank}
                onClick={handleClick}
                data-track-name={track.name}
                data-track-duration={track.duration}
                data-next-track-name={
                  idx === tracks.length - 1 ? "" : tracks[idx + 1].name
                }
                className={
                  playSong && playingTrack[0] === track.name
                    ? "active"
                    : "not-active"
                }
              >
                <TrackName>{track.name} </TrackName>
                <TrackTime>{convertSecondToMinute(track.duration)}</TrackTime>
              </TrackDetail>
            ))}
          </ul>
        </TrackWrapper>
      </Container>
    )
  }
}

const TrackTime = styled.span`
  color: ${COLORS.gray};
`

const TrackName = styled.span`
  color: ${COLORS.grayLight};
`

const TrackDetail = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 5px 1rem;

  &.active {
    background-color: ${COLORS.primary};
    border-radius: 0.4rem;
  }

  &.active span {
    color: ${COLORS.black};
  }

  &.not-active {
    opacity: 0.6;
  }
`

const Line = styled.div`
  background-color: indianred;
  height: 2px;
  margin: 5px auto 1rem;
`

const TrackWrapper = styled.div`
  font-size: 1.8rem;
  margin-top: 3rem;
  width: clamp(25rem, 50%, 60rem);
`

const IconWrapper = styled.div`
  color: ${COLORS.gray};

  &.play-pause {
    color: ${COLORS.primary};
  }

  &.two-icons {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }

  &.like {
    color: indianred;
  }
`

const TrackTimeBegin = styled.span``
const TrackTimeLeft = styled.span``

const TrackControlTime = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  color: ${COLORS.grayLight};
  padding-bottom: 0.5rem;
`

const TrackTimeLine = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  height: 2px;
  background-color: ${COLORS.grayDark};

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 10%;
    height: 2px;
    background-color: ${COLORS.primary};
  }

  ::after {
    content: "";
    position: absolute;
    top: -4px;
    left: 10%;
    width: 3px;
    height: 1rem;
    background-color: ${COLORS.grayLight};
    border-radius: 2px;
  }
`

const PlayingSong = styled.p`
  font-size: 1.8rem;
  padding-bottom: 5px;
`

const TrackTitle = styled.div`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`

const Controller = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

const ControlWrapper = styled.div`
  width: clamp(25rem, 50%, 60rem);
`

const AlbumArtist = styled.p`
  font-size: 1.6rem;
  color: ${COLORS.grayLight};
  font-family: "Oxygen", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  text-align: center;
`

const AlbumTitle = styled.p`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 5px;
`

const AlbumDetail = styled.div`
  padding: 2rem;
  position: relative;
`

const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  display: inline-block;
`

const Container = styled.div`
  margin-left: 7rem;
  margin-top: 6rem;
  padding: 2rem;
  background: ${COLORS.black};
  color: ${COLORS.white};
  overflow-y: auto;
  display: grid;
  place-items: center;
  position: relative;
  min-height: calc(100vh - 6rem);
`

const NextTrackTitle = styled.p`
  position: fixed;
  padding: 1rem 4rem 1rem 2rem;
  top: 11rem;
  right: 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${COLORS.grayLight};
  border-bottom: 1px solid ${COLORS.grayLight};
  border-left: 1px solid ${COLORS.grayLight};
  color: ${COLORS.grayLight};
  font-size: 1.6rem;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`
