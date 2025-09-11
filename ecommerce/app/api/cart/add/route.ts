import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const USERS_FILE = path.join(process.cwd(), "users.json")

export async function POST(req: Request) {
  const { email, productId } = await req.json()

  const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"))
  const userIndex = users.findIndex((u: any) => u.email === email)

  if (userIndex === -1) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  if (!users[userIndex].cart) users[userIndex].cart = []
  if (!users[userIndex].cart.includes(productId)) {
    users[userIndex].cart.push(productId)
  }

  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))

  return NextResponse.json({ cart: users[userIndex].cart })
}
