import path from "node:path";

// Any path.join whose first segment is unknown at build time, e.g. a temp
// directory from mkdtemp(). Nothing here refers to a file in the project.
export async function GET(request) {
  const dir = new URL(request.url).searchParams.get("dir") ?? "/tmp";
  return Response.json({ out: path.join(dir, "out") });
}
