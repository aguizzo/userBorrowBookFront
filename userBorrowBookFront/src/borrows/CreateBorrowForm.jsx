import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { InputLabel, Select, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../middleware/api";

const CreateBorrowForm = () => {
  const [formData, setFormData] = useState({
    user: {},
    book: {},
    points: 0,
  });

  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("/users");
      const data = response.data;

      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    getUsers();
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Paper style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}>
      <h2>Create New Borrow</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          select
          label="User"
          defaultValue=""
          onChange={handleChange}
          name="user"
          fullWidth
          sx={{ mb: 2 }}
        >
          {users.map((user) => (
            <MenuItem key={user.id} value={user}>
              {user.userAppName}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Book"
          defaultValue=""
          onChange={handleChange}
          name="book"
          fullWidth
          sx={{ mb: 2 }}
        >
          {books.map((book) => (
            <MenuItem key={book.id} value={book}>
              {book.title}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          Create Borrow
        </Button>
      </form>
    </Paper>
  );
};

export default CreateBorrowForm;
