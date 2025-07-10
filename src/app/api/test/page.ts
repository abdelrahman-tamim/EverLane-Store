import { NextRequest, NextResponse } from "next/server";

export default function GET(_: NextRequest) {
    console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
    return NextResponse.json({ key: process.env.NEXTAUTH_URL ?? "" });
}