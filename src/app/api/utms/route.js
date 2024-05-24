import { NextResponse } from "next/server";
import { data } from "../dummyData";

export async function GET() {
  return NextResponse.json({
    data: data,
  });
}
