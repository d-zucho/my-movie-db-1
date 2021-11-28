import { Image } from '../thumbnail/thumbnail.styles'

const Thumbnail = ({ image, movieId, clickable }) => {
  return (
    <div>
      <Image src={image} alt='Movie Thumbnail' />
    </div>
  )
}

export default Thumbnail
