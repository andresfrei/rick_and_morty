import Collection from '../components/Collection/Collection'
import CollectionBar from '../components/CollectionBar/CollectionBar'
const Home = () => {
  return (
    <section className='flex-grow flex-start w-100'>
      <CollectionBar/>
      <Collection/>
    </section>
  )
}

export default Home
