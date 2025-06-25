import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma";

const BookData = [
  {
    id: 1,
    booknName: "Superman:Legacy",
    author: "James Gunn",
    published_year: "July 11 2025",
  },
  {
    id: 2,
    booknName: "Fantastics Four",
    author: " Tom Cruise",
    published_year: "July 11 2025",
  },
];

export async function GET() {
  const books = await prisma.book.findMany();
  return NextResponse.json(books);
}

//Validation Shema to validate client request
const schema = yup.object().shape({
  book_name: yup.string().required("Book name is required"),
  author: yup.string().required("Author name is required"),
  published_year: yup.number().required("Published year is required"),
});

//Create Book API
export async function POST(req) {
  try {
    const body = await req.json(); //Get requested body data from client
    // console.log(body);
    const validatedData = await schema.validate(body, { abortEarly: false });
    const book = await prisma.book.create({
      data: validatedData,
    });
    return NextResponse.json({
      message: "Book is successfully created",
      book: book,
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
