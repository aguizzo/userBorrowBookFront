import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/Home";
import Books from "./books/Books";
import Users from "./users/Users";
import Borrows from "./borrows/Borrows";
import UpdateBookForm from "./books/UpdateBookForm";
import CreateBookForm from "./books/CreateBookForm";
import CreateUserForm from "./users/CreateUserForm";
import UpdateUserForm from "./users/UpdateUserForm";
import CreateBorrowForm from "./borrows/CreateBorrowForm";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/users" element={<Users />} />
            <Route path="/borrows" element={<Borrows />} />
            <Route path="/books/update/:id" element={<UpdateBookForm />} />
            <Route path="/books/create" element={<CreateBookForm />} />
            <Route path="/users/create" element={<CreateUserForm />} />
            <Route path="/borrows/create" element={<CreateBorrowForm />} />
            <Route path="/users/update/:id" element={<UpdateUserForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
