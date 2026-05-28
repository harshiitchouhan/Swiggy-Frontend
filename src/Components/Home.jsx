import Header from "./Header";
import FoodItems from "./FoodItems"
import InstaItems from "./InstaItems";
import DineItems from "./DineItems";
import Footer from "./Footer";


export default function Home(){
    return(
    <>
    <Header></Header>
    <FoodItems></FoodItems>
    <InstaItems></InstaItems>
    <DineItems></DineItems>
    <Footer></Footer>
    </>
    )
}