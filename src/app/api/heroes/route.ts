import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.API_URL}/heroes`);
  if (!res.ok) throw new Error("Fail to request heroes list");
  const data = await res.json();

  return NextResponse.json({ data });
}
