import { NextResponse } from "next/server"

// In-memory set to prevent duplicate submissions in the current runtime instance
const subscribedEmails = new Set<string>()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const trimmedEmail = email.trim().toLowerCase()

    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email format." },
        { status: 400 }
      )
    }

    if (subscribedEmails.has(trimmedEmail)) {
      return NextResponse.json(
        { 
          success: false, 
          isDuplicate: true, 
          message: "This email is already subscribed to Al Shomoukh International Private School eNews." 
        },
        { status: 409 }
      )
    }

    // Record subscription
    subscribedEmails.add(trimmedEmail)

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for subscribing to Al Shomoukh International Private School eNews!" 
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    )
  }
}
