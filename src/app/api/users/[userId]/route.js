import { NextResponse } from "next/server";
import { data } from "../../dummyData";

export async function GET(request, context) {
  const { params } = context;
  const user = data.filter((user) => user?.code?.toString() === params?.userId);
  return NextResponse.json({
    user,
  });
}
