import YouTube from 'react-youtube'

import '../../../../../assets/styles/scss/particles/youtube-video.scss'

type Props = {
  videoId: string
}

export const YouTubeVideo = ({ videoId }: Props) => {
  const opts = {
    height: '395',
    width: '645',
  }

  return (
    <YouTube
      videoId={videoId}
      className='youtube-video border-round-lg'
      opts={opts}
    />
  )
}