import CircleLoader from '../components/Loaders/CircleLoader'
import useLoader from '../hooks/useLoader'

const Loader = () => {
  const { loader } = useLoader()
  if (loader) {
    return (
    <div className='modal-container'>
      <CircleLoader/>
    </div>
    )
  }
}

export default Loader
