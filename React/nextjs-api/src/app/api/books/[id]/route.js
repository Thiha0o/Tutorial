import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma";

//Validation Shema to validate client request
const schema = yup.object().shape({
  book_name: yup.string().required("Book name is required"),
  author: yup.string().required("Author name is required"),
  published_year: yup.number().required("Published year is required"),
});

const BookData = [
  // {
  //   id: 1,
  //   bookn_name: "Superman:Legacy",
  //   author: "James Gunn",
  //   published_year: 2025,
  // },
  // {
  //   id: 2,
  //   book_name: "Fantastics Four",
  //   author: " Tom Cruise",
  //   published_year: 2025,
  // },
];

export async function PUT(req, { params }) {
  try {
    const bookId = parseInt(params.id);
    const body = await req.json();
    const validatedData = await schema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    }); //Call the validation schema
    await prisma.book.update({
      where: { id: bookId },
      data: validatedData,
    });
    return NextResponse.json({
      message: "Book Data is successfully updated.",
      bookId,
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
        error: error.message || error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const bookId = parseInt(params.id); //Get URI params field;

  try {
    await prisma.book.delete({
      where: { id: bookId },
    });
    return NextResponse.json(
      {
        message: "Book Data is successfully deleted",
        bookId,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Book not found or deletion is fail",
      },
      {
        status: 404,
      }
    );
  }
}

export async function GET(req, { params }) {
  const bookId = parseInt(params.id); // Converts "1" to 1

  //Find book in database
  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  });
  return NextResponse.json(book);

  // const book = BookData.find((b) => b.id === bookId);

  // if (!book) {
  //   return NextResponse.json({ error: "Book not found" }, { status: 404 });
  // }

  // return NextResponse.json(book);
}
