// app/api/upload/route.js
import fs from "fs";
import dbConnect from "@/lib/mongoose";
import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  const body = await req.json();
  const { filePath, folder = "quickcart" } = body || {};

  if (!filePath) {
    return new Response(JSON.stringify({ error: "filePath required" }), { status: 400 });
  }

  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ error: `File not found at path: ${filePath}` }), { status: 400 });
  }

  try {
    await dbConnect();
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    });

    return new Response(JSON.stringify({
      message: "Uploaded",
      url: result.secure_url,
      public_id: result.public_id,
      raw: result
    }), { status: 200 });
  } catch (err) {
    console.error("Upload error:", err);
    return new Response(JSON.stringify({ error: "Upload failed", details: err.message }), { status: 500 });
  }
}
