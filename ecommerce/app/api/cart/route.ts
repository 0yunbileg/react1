import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// Path to your users.json at the project root
const USERS_FILE = path.join(process.cwd(), "users.json")

export async function GET(req: Request) {
  try {
    const email = req.headers.get("x-user-email") // frontend must send logged-in user's email
    if (!email) {
      return NextResponse.json({ error: "Missing user email" }, { status: 400 })
    }

    if (!fs.existsSync(USERS_FILE)) {
      return NextResponse.json({ cart: [] })
    }

    const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"))
    const user = users.find((u: any) => u.email === email)

    if (!user) {
      return NextResponse.json({ cart: [] })
    }

    // return the user's cart array (product IDs)
    return NextResponse.json({ cart: user.cart || [] })
  } catch (error) {
    console.error("❌ Error in GET /api/cart:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
