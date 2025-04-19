import ShopsSection from '../shared/ShopsSection';

import RetailImg from '../../assets/retails.png';
import FoodImg from '../../assets/food_img.png';
import WarehousingImg from '../../assets/warehouse.png';
import ManufacturingImg from '../../assets/manufac_img.png';
import NavBar from '../shared/header/NavBar';
import ClientLogosSection from '../shared/ClientLogosSection';
import CTASection from '../shared/CtaSection';
import Footer from '../shared/Footer';
import Comment from '../shared/Comment';

import bhavika from '../../assets/img/clients/Bhavika_LogoF.png';
import buddy_boy from '../../assets/img/clients/thalappakatti.gif';
import iyengar from '../../assets/img/clients/IBS.png';
import pudong_metro from '../../assets/img/clients/Kurunji Metro.png';
import university_logo from '../../assets/img/clients/LOGO_Karaikudi.png';
import together from '../../assets/img/clients/Together_Restaurant - Copy.png';
import heritage from '../../assets/img/clients/thalappakatti.gif';

import { useEffect, useState } from 'react';
import TalkUs from './Talkus';
import SoftwareApproach from './SoftwareApproach';
interface ShopItem {
  title: string;
  imgSrc: string;
  altText: string;
  description: string;
}

const About = () => {
 
  
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Add border when scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shops: ShopItem[] = [
    {
      title: "Supermarket",
      imgSrc: RetailImg,
      altText: "Retail & Supermarket",
      description: "Everyday essentials under one roof",
    },
    {
      title: "Food Industry",
      imgSrc: FoodImg,
      altText: "Food Industry",
      description: "Fresh produce and everyday",
    },
    {
      title: "Warehousing",
      imgSrc: WarehousingImg,
      altText: "Warehousing & Logistics",
      description: "Efficient storage and timely delivery",
    },
    {
      title: "Manufacturing",
      imgSrc: ManufacturingImg,
      altText: "Manufacturing",
      description: "Turning raw materials into products",
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
    
       <TalkUs></TalkUs>
       
       <SoftwareApproach/>

      <Comment/>

      <ClientLogosSection clientLogos={clientLogos} />

      <CTASection product="V11 KDS" siteIndex="/" />
      
      <Footer></Footer>
    </>
  );
};

export default About;