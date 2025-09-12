import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const USERS_FILE = path.join(process.cwd(), "users.json")

export async function POST(req: Request) {
  try {
    const { email, productId } = await req.json()
    const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"))

    const userIndex = users.findIndex((u: any) => u.email === email)
    if (userIndex === -1) {
      return NextResponse.json({ cart: [] }, { status: 404 })
    }

    // Ensure cart exists
    if (!users[userIndex].cart) users[userIndex].cart = []

    // Remove productId from cart
    users[userIndex].cart = users[userIndex].cart.filter(
      (id: number) => id !== productId
    )

    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))

    return NextResponse.json({ cart: users[userIndex].cart })
  } catch (error) {
    console.error("Error in /api/cart/remove:", error)
    return NextResponse.json({ cart: [] }, { status: 500 })
  }
}
