import User from "@/models/User";

export const dynamic = "force-dynamic"

async function getData() {
  const users = await User.findAll()
  return {users}
}

