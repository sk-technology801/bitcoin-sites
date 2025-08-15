import connectDB from "@/lib/mongodb";
import Profile from "@/models/Profile";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  
  if (!userId) {
    return Response.json({ error: "User ID is required" }, { status: 400 });
  }

  const profile = await Profile.findOne({ userId });
  return Response.json(profile || {});
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();

  if (!data.userId) {
    return Response.json({ error: "User ID is required" }, { status: 400 });
  }

  const updatedProfile = await Profile.findOneAndUpdate(
    { userId: data.userId },
    data,
    { new: true, upsert: true }
  );

  return Response.json(updatedProfile);
}
