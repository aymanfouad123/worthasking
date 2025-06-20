// app/api/stripe/create-payment-intent/route.js
import { NextRequest, NextResponse } from "next/server";
import { createPaymentIntent } from "@/lib/stripe";
import { getServerSession } from "next-auth";

export async function POST(request) {
  try {
    // Check if user is authenticated
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse request body
    const body = await request.json();
    const { amount, question, creatorId } = body;

    // Validate input
    if (!amount || amount < 5) {
      return NextResponse.json(
        { error: "Minimum amount is $5" },
        { status: 400 }
      );
    }

    if (!question || question.trim().length === 0) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    // Create payment intent with metadata
    const paymentIntent = await createPaymentIntent(amount, "usd", {
      userId: session.user.id || session.user.email,
      creatorId,
      question: question.substring(0, 500), // Limit question length
      type: "question_tip",
    });

    // Return client secret to frontend
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error("Payment intent creation failed:", error);
    return NextResponse.json(
      { error: "Payment setup failed" },
      { status: 500 }
    );
  }
}
