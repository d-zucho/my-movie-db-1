// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// API
// images
import NoImage from '../images/no_image.jpg'
// hooks
import { useHomeFetch } from '../hooks/useHomeFetch'
// components
import Hero from '../components/hero/Hero'
import Grid from '../components/grid/Grid'
import Thumbnail from '../components/thumbnail/Thumbnail'
import Spinner from '../components/spinner/Spinner'

const Home = () => {
  const { state, loading, error } = useHomeFetch()

  return (
    <>
      {state.results[0] ? (
        <Hero
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Grid header='Popular Movies'>
        {state.results.map((movie) => (
          <Thumbnail
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            key={movie.id}>
            {movie.title}
          </Thumbnail>
        ))}
      </Grid>
      <Spinner />
    </>
  )
}

export default Home
