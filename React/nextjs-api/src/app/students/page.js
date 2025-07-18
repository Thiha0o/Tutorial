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

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const getStudentList = async () => {
    try {
      console.log("getStudentsList()");
      const response = await axios.get("/api/students");
      console.log("API Response", response.data);
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("Students setStudents data check", students);

  useEffect(() => {
    getStudentList();
    console.log("Render useEffect");
  }, []);

  return (
    <Box padding={2}>
      <Stack alignItems="flex-end" marginBottom="15px">
        <Link passHref href="/students/create">
          <Button variant="contained">Add Student</Button>
        </Link>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Father Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Major</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={student.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>{student.dob}</TableCell>
                <TableCell>{student.father_name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.gender}</TableCell>
                <TableCell>{student.address}</TableCell>
                <TableCell>{student.major} </TableCell>
                <TableCell align="center">
                  <Link href={`/students/${student.id}`} passHref>
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                  </Link>
                  <Link href={`/students/${student.id}/edit`} passHref>
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
