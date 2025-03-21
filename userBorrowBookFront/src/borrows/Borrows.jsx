import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../middleware/api";

const Borrows = () => {
  const [borrows, setBorrows] = useState([]);

  // Fetch borrows
  const fetchBorrows = async () => {
    try {
      const response = await axios.get("/borrows");
      const data = response.data;
      setBorrows(data);
    } catch (error) {
      console.error("Error fetching borrows:", error);
    }
  };

  useEffect(() => {
    fetchBorrows();
  }, []);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {}}
        style={{ marginBottom: "20px" }}
      >
        Add Borrow
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Book Title</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Borrow Date</TableCell>
              <TableCell>Return Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {borrows.map((borrow) => (
              <TableRow key={borrow.id}>
                <TableCell>{borrow.book.title}</TableCell>
                <TableCell>{borrow.user.userAppName}</TableCell>
                <TableCell>{borrow.borrowDate}</TableCell>
                <TableCell>{borrow.returnDate}</TableCell>
                <TableCell>
                  <Button color="primary" onClick={() => {}}>
                    Update
                  </Button>
                  <Button color="secondary" onClick={() => {}}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Borrows;
