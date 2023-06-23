import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Sale from "./pages/Sale";

function App() {
    return (
        <div className="w-screen h-screen bg-red-300">
            <Router>
                <Navbar />

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/account" element={<Account />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/sale" element={<Sale />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
