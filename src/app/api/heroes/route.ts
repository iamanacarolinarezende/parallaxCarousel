import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.API_URL}/heroes`);
    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch heroes" },
        { status: 500 }
      );
    }
    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
