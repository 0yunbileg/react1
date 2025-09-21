import { NextResponse } from "next/server"
import { readUsers, writeUsers, User } from "@/lib/userStore"

// Simple email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Simple phone regex (digits only, 7-15 characters)
const phoneRegex = /^[0-9]{7,15}$/

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, dateOfBirth, password } =
      await req.json()

    // 1️⃣ Check for missing or empty fields
    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !dateOfBirth?.trim() ||
      !password?.trim()
    ) {
      return NextResponse.json(
        { message: "❌ Missing fields" },
        { status: 400 }
      )
    }

    // 2️⃣ Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "❌ Invalid email format" },
        { status: 400 }
      )
    }

    // 3️⃣ Validate phone format
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { message: "❌ Invalid phone number" },
        { status: 400 }
      )
    }

    // 4️⃣ Read existing users
    const users = await readUsers()

    // 5️⃣ Check if email already exists
    if (users.find((u) => u.email === email)) {
      return NextResponse.json(
        { message: "⚠️ Email already registered" },
        { status: 400 }
      )
    }

    // 6️⃣ Add new user
    const newUser: User = {
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      password,
    }
    users.push(newUser)
    await writeUsers(users)

    return NextResponse.json({ message: "✅ User registered successfully!" })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "❌ Something went wrong" },
      { status: 500 }
    )
  }
}
