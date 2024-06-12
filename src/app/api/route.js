import { NextResponse } from "next/server";

export async function Post() {
  return NextResponse.json({
    name: "MaxLife",
  });
}
