import WorldwideCustomers from "../shared/ClientLogosSection";
import Comment from "../shared/Comment";
import Footer from "../shared/Footer";
import NavBar from "../shared/header/NavBar";
import MobileQROrderingSystem from "./carousel";

const Customer = () => {


  return (
    <> 
    <NavBar></NavBar>
    <MobileQROrderingSystem></MobileQROrderingSystem>
    <WorldwideCustomers></WorldwideCustomers>
    <Comment></Comment>
    <Footer></Footer>
    </>
  );
};

export default Customer;
