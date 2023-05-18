/** @format */

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Common/Header/Header";
import NotFound from "./Components/Common/NotFound/NotFound";
import Home from "./Home/Home/Home";
import Products from "./Home/Products/Products/Products";
import Admin from "./Home/Account/Admin/Admin";
import SignIn from "./Home/Account/SignIn/SignIn";
import SignUp from "./Home/Account/SignUp/SignUp";
import RegisterList from "./Home/Account/RegisterList/RegisterList";
import UpdateProduct from "./Home/Products/UpdateProduct/UpdateProduct";
import AddProduct from "./Home/Products/AddProduct/AddProduct";
import Footer from "./Components/Footer/Footer";
import Account from "./Home/Account/Account/Account";

//import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/product" element={<Products />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/registerlist" element={<RegisterList />} />
					<Route path="/updateproduct" element={<UpdateProduct />} />
					<Route path="/addproduct" element={<AddProduct />} />
					<Route path="/account" element={<Account />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
