import { NextResponse } from "next/server";
import * as yup from "yup";

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
  return NextResponse.json(StudentData);
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  fatherName: yup.string().required("Father Name is required"),
  address: yup.string().required("Address is required"),
  age: yup.number().required("Age is required"),
  major: yup.string().required("Major is required"),
});

// Create Student API
export async function POST(req) {
  try {
    const body = await req.json(); //Get requested body data from client
    // console.log(body);
    await schema.validate(body, { abortEarly: false }); //Call the validation schema
    return NextResponse.json({
      message: "Student is successfully created",
      bodyData: body,
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
