export default async function handler(req, res) {
  try {
    const {user} = req.query;
    if (!user) return res.status(400).send("Missing `user` query param");

    // Fetch GitHub contributions page (SVG calendar)
    const githubUrl = `https://github.com/bilalchawdhary1/${encodeURIComponent(
      user
    )}/contributions`;

    // Next.js (Node 18+) has global fetch available
    const r = await fetch(githubUrl, {headers: {"User-Agent": "Next.js App"}});
    if (!r.ok) return res.status(r.status).send("Failed to fetch from GitHub");

    const svg = await r.text();

    // Serve as SVG and cache on CDN (adjust cache headers as you like)
    res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=59");
    return res.status(200).send(svg);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server error");
  }
}
