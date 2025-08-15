import connectDB from "@/lib/mongodb";
import Settings from "@/models/Settings";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const settings = await Settings.findOne({ userId });
  return Response.json(settings || {});
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const settings = await Settings.findOneAndUpdate(
    { userId: data.userId },
    data,
    { new: true, upsert: true }
  );
  return Response.json(settings);
}
