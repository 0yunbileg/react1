import { NextResponse } from "next/server"
import { readUsers } from "@/lib/userStore"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json({ message: "❌ Missing fields" }, { status: 400 })
  }

  const users = await readUsers()
  const user = users.find((u) => u.email === email && u.password === password)

  if (!user) {
    return NextResponse.json(
      { message: "❌ Invalid email or password" },
      { status: 401 }
    )
  }

  return NextResponse.json({
    message: "✅ Login successful",
    user: { name: user.firstName, email: user.email },
  })
}
