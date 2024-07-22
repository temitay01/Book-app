import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Books";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookDetail from "../pages/BookDetail";
import Shelves from "../pages/Shelves";
import { getStoredBooks, storeBooks } from "../utils/booksMethods";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SecondContext = React.createContext();

function App() {
  const [savedBooks, setSavedBooks] = useState([]);
  const notify = (message) => toast(message);
  const handleSave = (book) => {
    if (!savedBooks.some((item) => item.id === book.id)) {
      setSavedBooks((prev) => {
        storeBooks([...prev, book]);
        return [...prev, book];
      });
      notify("Book successfully added!");
    } else {
      notify("Book already added!");
    }
  };

  useEffect(() => {
    const storedBooks = getStoredBooks();
    setSavedBooks(storedBooks);
  }, []);
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
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
