import { useEffect } from "react";

import CarouselCustomer from "./Carousel-Customer";

import NavigationBar from "../shared/NavigationBar";
import WorldwideCustomers from "../shared/ClientLogosSection";
import Comment from "../shared/Comment";
import Footer from "../shared/Footer";

function LandingCustomer() {
  useEffect(() => {
    document.title = "Customers - V11 TECH - Point of Sale";
  }, []);

  return (
    <>
      <NavigationBar></NavigationBar>

      <CarouselCustomer></CarouselCustomer>

      <WorldwideCustomers></WorldwideCustomers>

      <Comment></Comment>

      <Footer></Footer>
    </>
  )
}

export default LandingCustomer