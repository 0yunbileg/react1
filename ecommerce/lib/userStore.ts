import { promises as fs } from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "users.json")

export interface User {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  password: string
}

// Read users.json
export async function readUsers(): Promise<User[]> {
  try {
    const data = await fs.readFile(filePath, "utf-8")
    return JSON.parse(data) as User[]
  } catch (error) {
    return []
  }
}

// Write users.json
export async function writeUsers(users: User[]): Promise<void> {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2), "utf-8")
}
