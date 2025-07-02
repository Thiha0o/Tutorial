"use client";

import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import axios from "axios";

//Validation Shcema to validate client request
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  father_name: yup.string().required("Father Name is required"),
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Invalid Gender"),
  age: yup.number().required("Age is required"),
  dob: yup.date().required("Date of birth is required"),
  phone: yup.string().required("Phone is required"),
  address: yup.string().required("Address is required"),
  major: yup.string().required("Major is required"),
});

const GENDER = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export default function CreateStudent() {
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
        name: formData.name,
        father_name: formData.father_name,
        gender: formData.gender,
        age: formData.age,
        dob: dayjs(formData.dob).format("YYYY-MM-DD"),
        phone: formData.phone,
        address: formData.address,
        major: formData.major,
      };
      const response = await axios.post("/api/students", bodyData);
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
        <Typography variant="h4">Add a Student</Typography>
        <TextField
          label="Name"
          fullWidth
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="Age"
          fullWidth
          {...register("age")}
          error={!!errors.age}
          helperText={errors.age?.message}
        />
        <TextField
          label="Phone"
          fullWidth
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />
        <TextField
          label="Address"
          fullWidth
          {...register("address")}
          error={!!errors.address}
          helperText={errors.address?.message}
        />
        <TextField
          label="Father Name"
          {...register("father_name")}
          error={!!errors.father_name}
          helperText={errors.father_name?.message}
          fullWidth
        />
        <TextField
          label="Major"
          fullWidth
          {...register("major")}
          error={!!errors.major}
          helperText={errors.major?.message}
        />

        {/* Gender */}
        <FormControl fullWidth error={!!errors.gender}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Controller
            name="gender"
            control={control}
            error={!!errors.gender}
            render={({ field }) => (
              <Select
                {...field}
                labelId="gender-label"
                label="Gender"
                value={field.value || ""} //Ensure Controlled value
              >
                {GENDER.map((gender, index) => (
                  <MenuItem key={index} value={gender.value}>
                    {gender.label}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText>{errors.gender?.message}</FormHelperText>
        </FormControl>

        {/* DOB */}
        <FormControl fullWidth>
          <Controller
            name="dob"
            control={control}
            error={!!errors.dob}
            render={({ field, fieldState: { error } }) => (
              <DatePicker
                value={field.value ? dayjs(field.value, "YYYY/MM/DD") : null}
                onChange={(e) => field.onChange(e?.format("YYYY/MM/DD"))}
                format="DD/MM/YYYY"
                label="DOB"
                slotProps={{
                  textField: {
                    error: !!error,
                    helperText: error?.message,
                  },
                }}
              />
            )}
          />
          <FormHelperText>{errors.role?.message}</FormHelperText>
        </FormControl>
        <Button type="submit" variant="contained">
          Save Data
        </Button>
      </Stack>
    </Box>
  );
}
