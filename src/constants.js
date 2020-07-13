// import { LAST_FM_API_KEY } from "./secret.js"

export const LAST_FM =
  "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key="

export const generateAlbumData = async (artistName, albumName) => {
  let response, data
  try {
    response = await fetch(
      `${LAST_FM}${process.env.GATSBY_LAST_FM_API_KEY}&artist=${encodeURIComponent(
        artistName
      )}&album=${encodeURIComponent(albumName)}&format=json`
    )

    data = await response.json()
    if (data.error) {
      throw new Error(data)
    }
    return {
      title: data.album.name,
      artist: data.album.artist,
      imageSrc: data.album.image[2]["#text"],
      tracks: data.album.tracks.track,
    }
  } catch (error) {
    console.error(error)
    return {
      title: "",
      artist: "",
      imageSrc: "",
      tracks: "",
    }
  }
}

export const albums = [
  {
    artist: "Pink Floyd",
    album: "The Wall",
  },
  {
    artist: "Coldplay",
    album: "A Head Full Of Dreams",
  },
  {
    artist: "Genesis",
    album: "A Trick Of The Tail",
  },
  {
    artist: "Yes",
    album: "Relayer",
  },
  {
    artist: "Colbie Caillat",
    album: "Coco",
  },
  {
    artist: "John Mayer",
    album: "Continuum",
  },
  {
    artist: "Jason Mraz",
    album: "Know",
  },
  {
    artist: "John Mayer",
    album: "Room For Squares",
  },
  {
    artist: "Guns N' Roses",
    album: "Appetite For Destruction",
  },
  {
    artist: "Aerosmith",
    album: "Get A Grip",
  },
  {
    artist: "Kiss",
    album: "Destroyer",
  },
  {
    artist: "Motley Crue",
    album: "Dr. Feelgood",
  },
  {
    artist: "Skid Row",
    album: "Skid Row",
  },
  {
    artist: "Poison",
    album: "Flesh & Blood",
  },
  {
    artist: "Metallica",
    album: "Master Of Puppets",
  },
  {
    artist: "Pink Floyd",
    album: "The Dark Side Of The Moon",
  },
  {
    artist: "Annie Lennox",
    album: "Medusa",
  },
  {
    artist: "Simply Red",
    album: "Blue",
  },
  {
    artist: "Seal",
    album: "Seal",
  },
  {
    artist: "Sade",
    album: "Love Deluxe",
  },
]

export const homeData = [
  "recently played",
  "your favourite songs and albums",
  "jump back in",
  "made for you",
]

export const podcastData = [
  "your recent podcast",
  "your favourite podcast",
  "related podcast for you",
  "",
]

export const playlistData = [
  "recent playlist",
  "milennials playlist",
  "favourite playlist by your friends",
  "playlist made for you",
]

export const newData = ["new albums and singles", "music video", "live stream"]

export const COLORS = {
  white: "#fdfdfd",
  black: "#222",
  blackDark: "#111",
  blackLight: "#333",
  primary: "rgb(29,185,84)",
  gray: "hsl(188, 5%, 50%)",
  grayDark: "hsl(188, 12%, 20%)",
  grayLight: "hsl(188, 5%, 80%)",
}
