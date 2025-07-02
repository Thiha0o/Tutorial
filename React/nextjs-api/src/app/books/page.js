"use client";
import { useEffect, useState } from "react";
import {
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import Link from "next/link";
import axios from "axios";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const getBookList = async () => {
    try {
      console.log("getBooksList()");
      const response = await axios.get("/api/books");
      console.log("API Response", response.data);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("Books setBooks data check", books);

  useEffect(() => {
    getBookList();
    console.log("Render useEffect");
  }, []);

  return (
    <Box padding={2}>
      <Stack alignItems="flex-end" marginBottom="15px">
        <Link passHref href="/books/create">
          <Button variant="contained">Add Book</Button>
        </Link>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Book Name</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Published Year</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book, index) => (
              <TableRow key={book.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{book.book_name}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.published_year}</TableCell>

                <TableCell align="center">
                  <Link href={`/books/${book.id}`} passHref>
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                  </Link>
                  <Link href={`/books/${book.id}/edit`} passHref>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
