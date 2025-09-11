import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const USERS_FILE = path.join(process.cwd(), "users.json")

export async function POST(req: Request) {
  try {
    const { email, productId } = await req.json()
    if (!email || !productId)
      return NextResponse.json({ error: "Missing data" }, { status: 400 })

    const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"))
    const userIndex = users.findIndex((u: any) => u.email === email)
    if (userIndex === -1)
      return NextResponse.json({ error: "User not found" }, { status: 404 })

    if (!users[userIndex].cart) users[userIndex].cart = []
    users[userIndex].cart = users[userIndex].cart.filter(
      (id: number) => id !== productId
    )

    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))
    return NextResponse.json({ cart: users[userIndex].cart })
  } catch (err) {
    console.error("Error in /api/cart/remove:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
