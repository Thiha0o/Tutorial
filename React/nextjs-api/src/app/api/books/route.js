import { NextResponse } from "next/server";

const BookData = [
  {
    name: "Superman:Legacy",
    author: "James Gunn",
  },
];

export async function GET() {
  return NextResponse.json(BookData);
}

export async function POST(req) {
  const body = await req.json(); //Get requested body data from client
  console.log(body);
  return NextResponse.json({
    message: "Student is successfully created",
    bodyData: BookData,
  });
}
