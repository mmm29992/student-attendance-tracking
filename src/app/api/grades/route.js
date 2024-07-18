import Grade from "@/models/Grade"; // Adjust the path as needed

export async function GET(req, res) {
  try {
    const grades = await Grade.findAll();
    return new Response(JSON.stringify(grades), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching grades:", error);
    return new Response(JSON.stringify({ error: "Error fetching grades" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
