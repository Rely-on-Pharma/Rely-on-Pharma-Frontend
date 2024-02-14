import { MemoizedSwiper } from '@/pages/Home/Hero.jsx';
import {data} from '../constants/CarousalData.js'
const Home = () => {
  return <>
  
    <MemoizedSwiper data={data} slidesPerView={1} spaceBetween={30} loop={true} delay={2500} id="hero-carousal"/>
  </>;
};

export default Home;