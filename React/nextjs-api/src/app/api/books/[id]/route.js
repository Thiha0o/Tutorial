import { NextResponse } from "next/server";
import * as yup from "yup";

const schema = yup.object().shape({
  bookName: yup.string().required("Book name is required"),
  author: yup.string().required("Author name is required"),
  published_year: yup.number().required("Published year is required"),
});

export async function PUT(req, { params }) {
  try {
    const bookId = params.id;
    const body = await req.json();
    return NextResponse.json({
      message: "Book Data is successfully updated.",
      bookId,
      bodyData: body,
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

export async function DELETE(req, { params }) {
  const bookId = params.id; //Get URI params field;
  return NextResponse.json({
    message: "Book Data is successfully deleted",
    bookId,
  });
}

export async function GET(req, { params }) {
  const bookId = params.id; //Get URI params field;
  const book = {
    id: bookId,
    bookName: "Superman Legacy",
    author: "James Gunn",
    published_year: "July 11 2025",
    starring: "David Corenswet,Rachel Brosnaham",
  };
  return NextResponse.json(book);
}
