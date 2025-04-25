import ShopsSection from '../shared/ShopsSection';

import RetailImg from '../../assets/retails.png';
import FoodImg from '../../assets/food_img.png';
import WarehousingImg from '../../assets/warehouse.png';
import ManufacturingImg from '../../assets/manufac_img.png';
import NavigationBar from '../shared/NavigationBar';
import ClientLogosSection from '../shared/ClientLogosSection';
import CTASection from '../shared/CtaSection';
import Footer from '../shared/Footer';
import Comment from '../shared/Comment';

import { useEffect, useState } from 'react';
import TalkUs from './Talkus';
import SoftwareApproach from './SoftwareApproach';
import CarouselAbout from './Carousel-About';

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


  return (
    <>
      <NavigationBar></NavigationBar>

      <CarouselAbout></CarouselAbout>

      <ShopsSection shops={shops}></ShopsSection>

      <TalkUs></TalkUs>

      <SoftwareApproach />

      <Comment />

      <ClientLogosSection />

      <CTASection product="V11-Tech" siteIndex="/" />

      <Footer></Footer>
    </>
  );
};

export default About;