import WorldwideCustomers from "../shared/ClientLogosSection";
import Comment from "../shared/Comment";
import Footer from "../shared/Footer";
import NavigationBar from "../shared/NavigationBar";
import MobileQROrderingSystem from "./carousel";

const Customer = () => {


  return (
    <> 
    <NavigationBar></NavigationBar>
    <MobileQROrderingSystem></MobileQROrderingSystem>
    <WorldwideCustomers></WorldwideCustomers>
    <Comment></Comment>
    <Footer></Footer>
    </>
  );
};

export default Customer;
