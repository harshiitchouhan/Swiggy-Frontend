import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import NavBar from "./Components/NavBar"
import Dummy from "./Components/Dummy";
import {BrowserRouter, Routes , Route} from "react-router";
import { store } from "./Stores/store";
import {Provider} from "react-redux";
import Checkout from "./Components/Checkout";

function App() {
  
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/instamart" element={<Dummy></Dummy>} ></Route>
      <Route path="/corporate" element={<Dummy></Dummy>} ></Route>
      <Route path="/partner" element={<Dummy></Dummy>} ></Route>
      <Route path="/dineout" element={<Dummy></Dummy>}></Route>
      <Route path="/collections" element={<Dummy></Dummy>}></Route>
      <Route element={<NavBar></NavBar>}>
      <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
      <Route path="/city/delhi/:id" element= {<RestaurantMenu></RestaurantMenu>}></Route>
      <Route path="/city/delhi/:id/search" element={<SearchFood/>}></Route>
      </Route>
      <Route path="/checkout" element={<Checkout></Checkout>}></Route>
    </Routes>
    
    </BrowserRouter>
    </Provider>
    </>
    
  )
}

export default App;
