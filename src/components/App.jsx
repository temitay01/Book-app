import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Books";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookDetail from "../pages/BookDetail";
import Shelves from "../pages/Shelves";

export const SecondContext = React.createContext();

function App() {
  const [savedBooks, setSavedBooks] = useState([]);

  const handleSave = (id) => {
    if (!savedBooks.includes(id)) {
      setSavedBooks([...savedBooks, id]);
      alert("Added to shelf");
    } else {
      alert("Book Already Added");
    }
  };

  return (
    <BrowserRouter>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <SecondContext.Provider
          value={{ savedBooks, setSavedBooks, handleSave }}
        >
          <Navbar />

          <div style={{ flex: "1" }}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/books/:id" element={<BookDetail />} />
              <Route path="/shelve" element={<Shelves />} />
            </Routes>
          </div>
        </SecondContext.Provider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
