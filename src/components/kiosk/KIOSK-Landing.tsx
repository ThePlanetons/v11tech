
import ShopsSection from '../shared/ShopsSection';

import teaShopImg from '../../assets/img/TeaShops.jpeg';
import groceryShopImg from '../../assets/img/GroceryShop.jpeg';
import fashionShopImg from '../../assets/img/FashionsShop.jpeg';
import stationaryShopImg from '../../assets/img/StationaryShop.jpeg';
import NavBar from '../shared/header/NavBar';
import ClientLogosSection from '../shared/ClientLogosSection';
import CTASection from '../shared/CtaSection';
import Footer from '../shared/Footer';

import bhavika from '../../assets/img/clients/Bhavika_LogoF.png';
import buddy_boy from '../../assets/img/clients/thalappakatti.gif';
import iyengar from '../../assets/img/clients/IBS.png';
import pudong_metro from '../../assets/img/clients/Kurunji Metro.png';
import university_logo from '../../assets/img/clients/LOGO_Karaikudi.png';
import together from '../../assets/img/clients/Together_Restaurant - Copy.png';
import heritage from '../../assets/img/clients/thalappakatti.gif';

interface ShopItem {
  title: string;
  imgSrc: string;
  altText: string;
  description: string;
}

const KIOSKLanding = () => {
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

  const clientLogos = [
    { src: bhavika, alt: 'Bhavika' },
    { src: buddy_boy, alt: 'Buddy Boy' },
    { src: iyengar, alt: 'Iyengar' },
    { src: pudong_metro, alt: 'Pudong Metro' },
    { src: university_logo, alt: 'University' },
    { src: together, alt: 'Together' },
    { src: heritage, alt: 'Heritage' },
  ];


  return (
    <>
      <NavBar></NavBar>

      <ShopsSection shops={shops}></ShopsSection>

      <ClientLogosSection clientLogos={clientLogos} />

      <CTASection product="V11 KIOSK" siteIndex="/" />
      
      <Footer></Footer>
    </>
  );
};

export default KIOSKLanding;