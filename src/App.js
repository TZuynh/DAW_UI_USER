import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/indexPage';
import PopupLogin from './pages/viewPopUp';
import SignUp from './components/signup';
import ViewProductDetail from './pages/viewproductdetail';
import ViewProduct from './pages/viewallproduct';
import ViewContact from './pages/viewcontact';
import ViewAboutUs from './pages/viewAboutUs';
import ViewCart from './pages/viewCart';

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleOpenLogin = () => setLoginOpen(true);
  const handleCloseLogin = () => setLoginOpen(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/view-product-detail" element={<ViewProductDetail />} />
        <Route path="/view-product" element={<ViewProduct />} />
        <Route path="/view-contact" element={<ViewContact />} />
        <Route path="/view-about-us" element={<ViewAboutUs />} />
        <Route path="/view-cart" element={<ViewCart />} />
      </Routes>

      <button onClick={handleOpenLogin} style={{ position: 'fixed', top: 10, right: 10 }}>
        Đăng nhập
      </button>

      <PopupLogin isOpen={isLoginOpen} onClose={handleCloseLogin} />
    </>
  );
}

export default App;
