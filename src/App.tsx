/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToAnchor from './components/ScrollToAnchor';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductListing from './pages/ProductListing';
import FloatingSidebar from './components/ui/FloatingSidebar';
import ChatWidget from './components/ui/ChatWidget';

export default function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="min-h-screen relative">
        <Header />
        <FloatingSidebar />
        <ChatWidget />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
