
import NavBar from './header/NavBar';
import ShopsSection from '../shared/ShopsSection';
import TalkUs from './Talkus';
import PricingSection from './box';
import TestimonialCarousel from './carousel';
import V11QRLanding from './V11tech';
import Footer from './Footer';

import teaShopImg from '../../assets/img/TeaShops.jpeg';
import groceryShopImg from '../../assets/img/GroceryShop.jpeg';
import fashionShopImg from '../../assets/img/FashionsShop.jpeg';
import stationaryShopImg from '../../assets/img/StationaryShop.jpeg';

interface ShopItem {
  title: string;
  imgSrc: string;
  altText: string;
  description: string;
}

const Landing = () => {
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 10); // Add border when scrolling
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const shops: ShopItem[] = [
    {
      title: "Restaurants & Tea Shops",
      imgSrc: teaShopImg,
      altText: "Restaurants & Tea Shops",
      description: "Discover local flavors and cozy atmospheres",
    },
    {
      title: "Grocery Shop",
      imgSrc: groceryShopImg,
      altText: "Grocery Shop",
      description: "Fresh produce and everyday essentials",
    },
    {
      title: "Clothing & Fashions Shop",
      imgSrc: fashionShopImg,
      altText: "Clothing & Fashions Shop",
      description: "Stay trendy with the latest styles",
    },
    {
      title: "Stationary Shop",
      imgSrc: stationaryShopImg,
      altText: "Stationary Shop",
      description: "Quality supplies for work and school",
    },
  ];

  return (
    <>
      <NavBar></NavBar>

      <ShopsSection shops={shops}></ShopsSection>

      <TalkUs></TalkUs>

      <PricingSection></PricingSection>

      <TestimonialCarousel></TestimonialCarousel>

      <V11QRLanding></V11QRLanding>

      <Footer></Footer>
    </>
  );
};

export default Landing;