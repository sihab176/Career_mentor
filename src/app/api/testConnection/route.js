import dbConnect, { collectionName } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const chatCollection = await dbConnect(
      collectionName.careerMentorChatCollection
    );

    const count = await chatCollection.countDocuments();

    return NextResponse.json({
      success: true,
      message: "MongoDB connected successfully 🎉",
      totalChats: count,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "MongoDB connection failed ❌",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
