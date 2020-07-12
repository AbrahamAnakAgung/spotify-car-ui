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

export const PlayUI = props => {
  const album = props.location.state.value
  const { artist, imageSrc, title, tracks } = album

  const [playSong, setPlaySong] = React.useState(false)
  const [playingTrack, setPlayingTrack] = React.useState([])

  const handleClick = event => {
    const trackData = [
      event.currentTarget.dataset.trackName,
      Number(event.currentTarget.dataset.trackDuration),
    ]
    setPlayingTrack(trackData)
    setPlaySong(true)
  }

  return (
    <Container>
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
            <p>{playingTrack[0]}</p>
          </TrackTitle>
          <TrackTimeLine>
            <TrackTimeBegin>0.00</TrackTimeBegin>
            <TrackTimeLeft>
              -{convertSecondToMinute(playingTrack[1])}
            </TrackTimeLeft>
          </TrackTimeLine>
          <Controller>
            <IconWrapper>
              <Icon icon={heart} size="24" />
            </IconWrapper>
            <IconWrapper className="play-pause">
              <Icon icon={play} size="48" />
              {/* <Icon icon={pause} size="40" /> */}
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
        <p style={{ color: `${COLORS.grayLight}` }}>TRACKS</p>
        <Line />
        <ul>
          {tracks.map(track => (
            <TrackDetail
              key={track["@attr"].rank}
              onClick={handleClick}
              data-track-name={track.name}
              data-track-duration={track.duration}
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
  padding: 5px 0;

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
`

const TrackTimeBegin = styled.span``
const TrackTimeLeft = styled.span``

const TrackTimeLine = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.4rem;
  color: ${COLORS.grayLight};

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${COLORS.primary};
  }

  ::after {
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    width: 3px;
    height: 1rem;
    background-color: ${COLORS.grayLight};
    border-radius: 2px;
  }
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
  background: black;
  color: ${COLORS.white};
  overflow-y: auto;
  display: grid;
  place-items: center;
`
