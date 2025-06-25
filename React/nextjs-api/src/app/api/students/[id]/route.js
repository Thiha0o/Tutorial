import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma";

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

//Update Student API
export async function PUT(req, { params }) {
  try {
    const studentId = parseInt(params.id); //get URI params field;
    const body = await req.json();
    const validatedData = await schema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    }); //Call the validation schema
    await prisma.student.update({
      where: { id: studentId },
      data: validatedData,
    });
    return NextResponse.json({
      message: "Student is successfully updated.",
      studentId,
    });
  } catch (error) {
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

//Delete Student API
export async function DELETE(req, { params }) {
  const studentId = parseInt(params.id); //Get URI params field;

  try {
    await prisma.student.delete({
      where: { id: studentId },
    });
    return NextResponse.json(
      {
        message: "Student is successfully deleted",
        studentId,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Student not found or deletion is fail",
      },
      {
        status: 404,
      } //when desired id is not found
    );
  }
}

//Get Student Detail API
export async function GET(req, { params }) {
  const studentId = parseInt(params.id); //Get URI params field;

  //Find student in database.
  const student = await prisma.student.findUnique({
    where: {
      id: studentId,
    },
  });
  return NextResponse.json(student);
}
