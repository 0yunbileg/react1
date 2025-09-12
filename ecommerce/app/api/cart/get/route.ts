import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const USERS_FILE = path.join(process.cwd(), "users.json")

export async function POST(req: Request) {
  const { email } = await req.json()

  const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"))
  const user = users.find((u: any) => u.email === email)

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 })

  return NextResponse.json({ cart: user.cart || [] })
}
