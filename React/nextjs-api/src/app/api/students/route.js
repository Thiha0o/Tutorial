import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma";

const StudentData = [
  {
    name: "Su Su",
    age: 17,
    address: "Hlaing",
    major: "Computer Science",
  },
  {
    name: "Tu Tu",
    age: 17,
    address: "Hledan",
    major: "Computer Science",
  },
  {
    name: "Toe Kyaw",
    age: 17,
    address: "Than Lan",
    major: "Computer Science",
  },
];

// Student List API
export async function GET() {
  const students = await prisma.student.findMany();
  return NextResponse.json(students);
}

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

// Create Student API
export async function POST(req) {
  try {
    const body = await req.json(); //Get requested body data from client
    // console.log(body);
    const validatedData = await schema.validate(body, { abortEarly: false }); //Call the validation schema
    const student = await prisma.student.create({
      data: validatedData,
    });
    return NextResponse.json({
      message: "Student is successfully created",
      student: student,
    });
  } catch (error) {
    // return NextResponse.json(
    //   { message: "Internal Server Error" },
    //   {
    //     status: 500,
    //   }
    // );

    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          message: "Validation Failed",
          errors: error.inner.map((e) => ({
            path: e.path,
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Unexpected error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
