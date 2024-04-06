import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseAuth/FirebaseAuth";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Contact from "./components/AllProducts/Contact/Contact";
import About from "./components/About/About";

function App() {
  const [cart, setcart] = useState([]);
  const [promocode, setPromocode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [invalid, setInvalid] = useState("Invalid Promocode");
  const [userName, setuserName] = useState("");

  // Add to Cart
  const AddtoCart = (product) => {
    const isProductExist = cart.find((findItem) => findItem.id === product.id);
    if (isProductExist) {
      const updateCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setcart(updateCart);
      toast.success("Product added to cart");
    } else {
      setcart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Increase Quantity
  const handleInc = (id) => {
    const incQuantity = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setcart(incQuantity);
  };
  // Decrease Quantity
  const handleDec = (id) => {
    const decQuantity = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setcart(decQuantity);
  };
  //Remove from Cart
  const handleRemove = (id) => {
    const finalRemove = cart.filter((filterItem) => filterItem.id !== id);
    setcart(finalRemove);
  };
  // calculate total price
  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.price * cartReduceItem.quantity;
    }, 0);
    return totalPrice - discount;
  };
  //Promocode SEction

  const applyPromoCode = () => {
    if (promocode === "DIBYA10") {
      setDiscount(getTotalPrice() * 0.1);
      setPromocode("");
      setInvalid("");
    } else {
      setInvalid("Invalid Promo Code");
    }
  };
  //Username Display
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuserName(user.displayName);
      } else {
        setuserName("");
      }
    });
  }, []);
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar cart={cart} userName={userName} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleDec={handleDec}
                  handleInc={handleInc}
                  handleRemove={handleRemove}
                  getTotalPrice={getTotalPrice}
                  applyPromoCode={applyPromoCode}
                  promocode={promocode}
                  setPromocode={setPromocode}
                  invalid={invalid}
                />
              }
            />
            <Route
              path="/allproducts"
              element={<AllProducts AddtoCart={AddtoCart} />}
            />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/singleproduct/:productId"
              element={<SingleProduct AddtoCart={AddtoCart} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Toaster />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
