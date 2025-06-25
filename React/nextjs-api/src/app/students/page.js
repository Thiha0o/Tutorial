"use client";

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
} from "@mui/material";
import Link from "next/link";

export default function StudentList() {
  return (
    <Box padding={2}>
      <Stack alignItems="flex-end">
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
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Su Su</TableCell>
              <TableCell>09888888888</TableCell>
              <TableCell>9.2.2001</TableCell>
              <TableCell>U Htun San</TableCell>
              <TableCell>24</TableCell>
              <TableCell>Female</TableCell>
              <TableCell>Hlaing</TableCell>
              <TableCell>Computer Science</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
