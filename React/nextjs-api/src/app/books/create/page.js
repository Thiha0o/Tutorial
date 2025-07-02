"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

//Validation Shema to validate client request
const schema = yup.object().shape({
  book_name: yup.string().required("Book name is required"),
  author: yup.string().required("Author name is required"),
  published_year: yup.number().required("Published year is required"),
});

export default function CreateBook() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const onSubmit = async (formData) => {
    console.log("formData", formData);
    // console.log("Name Input Data", formData.name);
    try {
      console.log("formData", formData);
      const bodyData = {
        book_name: formData.book_name,
        author: formData.author,
        published_year: formData.published_year,
      };
      const response = await axios.post("/api/books", bodyData);
      reset();
      console.log("Successfully Saved.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      padding={2}
      component="form"
      width="60%"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={2}>
        <Typography variant="h4">Add a Book</Typography>
        <TextField
          label="Book Name"
          fullWidth
          {...register("book_name")}
          error={!!errors.book_name}
          helperText={errors.book_name?.message}
        />
        <TextField
          label="Author"
          fullWidth
          {...register("author")}
          error={!!errors.author}
          helperText={errors.author?.message}
        />
        <TextField
          label="Published Year"
          fullWidth
          {...register("published_year")}
          error={!!errors.published_year}
          helperText={errors.published_year?.message}
        />
        <Button type="submit" variant="contained">
          Save a book
        </Button>
      </Stack>
    </Box>
  );
}
