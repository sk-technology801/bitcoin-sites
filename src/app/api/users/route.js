import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  await connectDB();
  const users = await User.find();
  return Response.json(users);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const user = await User.create(data);
  return Response.json(user);
}
