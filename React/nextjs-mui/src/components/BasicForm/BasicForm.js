"use client";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
} from "@mui/material";
import { schema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, Controller } from "react-hook-form";

const ROLES = [
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" },
  { value: "finance", label: "Finance" },
  { value: "manager", label: "Manager" },
];

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      role: "",
    },
  });

  const onSubmit = (formData) => {
    console.log("formData", formData);
    console.log("Name Input Data", formData.name);
    reset();
  };

  return (
    <Box
      component="form"
      sx={{ p: 2, backgroundColor: "beige" }}
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
        label="Age"
        fullWidth
        sx={{ mb: 2 }}
        {...register("age")}
        error={!!errors.age}
        helperText={errors.age?.message}
      />
      <FormControl
        fullWidth
        sx={{ mb: 2 }}
        margin="normal"
        error={!!errors.role}
      >
        <InputLabel id="role-label">Role</InputLabel>
        <Controller
          name="role"
          control={control}
          error={!!errors.role}
          render={({ field }) => (
            <Select
              {...field}
              labelId="role-label"
              label="Role"
              value={field.value || ""} //Ensure Controlled value
            >
              {ROLES.map((role, index) => (
                <MenuItem key={index} value={role.value}>
                  {role.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errors.role?.message}</FormHelperText>
      </FormControl>
      <Button variant="contained" type="submit">
        SUBMIT
      </Button>
    </Box>
  );
}
