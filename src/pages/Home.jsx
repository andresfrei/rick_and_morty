import Collection from '../components/Collection/Collection'
import CollectionBar from '../components/CollectionBar/CollectionBar'
const Home = () => {
  return (
    <div className='flex-column'>
      <CollectionBar/>
      <Collection/>
    </div>
  )
}

export default Home
