// ---------------------------------------------------------------
// Visitor counter
//
// Local dev:  backend runs on http://localhost:8080
// Production: replace API_URL with your deployed Cloud Function /
//             API Gateway URL after following the migration guide
//             in README.md.
// ---------------------------------------------------------------
const API_URL = "http://localhost:8080/visitor-count";

async function loadVisitorCount() {
  const el = document.getElementById("visitor-count");
  try {
    const response = await fetch(API_URL, { method: "POST" });
    if (!response.ok) throw new Error(`API returned ${response.status}`);
    const data = await response.json();
    el.textContent = data.count.toLocaleString();
  } catch (err) {
    console.error("Visitor counter unavailable:", err);
    el.textContent = "—";
    el.title = "Counter API is unreachable. Is the backend running?";
  }
}

document.addEventListener("DOMContentLoaded", loadVisitorCount);
