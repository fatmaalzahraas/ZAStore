import React , {useEffect} from 'react'
import Hero from '../components/Hero/Hero';
import PageTitle from '../components/PageTitle/PageTitle';
import ProductsContent from '../components/ProductsContent/ProductsContent';
import Services from '../components/Services/Services';
import { fetchProducts } from '../redux-toolkit/productsSlice';
import { useDispatch , useSelector} from 'react-redux';
import TimerCountDown from '../components/Timer/TimerCountDown';
const Home = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
  const filteredProducts = (category) => {
    return products.filter(product => product.category === category);
  }
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <PageTitle title="Home">
      <Hero />
      <Services />
      <ProductsContent filteredByCategory={filteredProducts("mobile")} title="Trending Products"/>
      <ProductsContent filteredByCategory={filteredProducts("watch")} title="Best Sales"/>
      <TimerCountDown />
      <ProductsContent filteredByCategory={filteredProducts("sofa")} title="New Arrivals"/>
      <ProductsContent filteredByCategory={filteredProducts("chair")} title="Popular In Category"/>
    </PageTitle>
  )
}
export default Home;