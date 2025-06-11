"use client";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  FormHelperText,
} from "@mui/material";

import { schema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

const CITIES = [
  { value: "yangon", label: "Yangon" },
  { value: "mandalay", label: "Mandalay" },
  { value: "naypyithaw", label: "NayPyiThaw" },
];

const TOWNSHIPS = [
  { value: "hlaing", label: "Hlaing" },
  { value: "bahan", label: "Bahan" },
  { value: "dagon", label: "Dagon" },
  { value: "insein", label: "Insein" },
];

export default function ContactFormCopy() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      city: "",
      township: "",
    },
  });

  const onSubmit = (formData) => {
    console.log("FormData", formData);
    // console.log("FormData", formData);
    // console.log("Input Data ", formData.name);
    reset();
  };
  return (
    <Box
      component="form"
      sx={{ p: 2, backgroundColor: "bisque" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label="Name"
        fullWidth
        sx={{ mb: 2 }}
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        fullWidth
        sx={{ mb: 2 }}
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Phone Number"
        fullWidth
        sx={{ mb: 2 }}
        {...register("phoneNumber")}
        error={!!errors.phoneNumber}
        helperText={errors.phoneNumber?.message}
      />
      <TextField
        label="Address"
        fullWidth
        sx={{ mb: 2 }}
        {...register("address")}
        error={!!errors.address}
        helperText={errors.address?.message}
      />

      <FormControl
        fullWidth
        sx={{ mb: 2 }}
        margin="normal"
        error={!!errors.city}
      >
        <InputLabel id="city-id">City</InputLabel>

        <Controller
          name="city"
          control={control}
          error={!!errors.city}
          render={({ field }) => (
            <Select
              {...field}
              labelId="city-id"
              label="City"
              value={field.value || ""}
            >
              {CITIES.map((city, index) => (
                <MenuItem key={index} value={city.value}>
                  {city.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errors.city?.message}</FormHelperText>
      </FormControl>

      <FormControl
        fullWidth
        sx={{ mb: 2 }}
        margin="normal"
        error={!!errors.township}
      >
        <InputLabel id="township-id">Township</InputLabel>

        <Controller
          name="township"
          control={control}
          error={!!errors.township}
          render={({ field }) => (
            <Select
              {...field}
              labelId="township-id"
              label="Township"
              value={field.value || ""}
            >
              {TOWNSHIPS.map((township, index) => (
                <MenuItem key={index} value={township.value}>
                  {township.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errors.township?.message}</FormHelperText>
      </FormControl>

      <Button variant="contained" type="submit">
        Save
      </Button>
    </Box>
  );
}
