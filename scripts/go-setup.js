const { execSync } = require("child_process");
const path = require("path");

const serverPath = path.join(__dirname, "..", "apps", "server");

console.log("📦 Setting up Go backend...");
try {
  process.chdir(serverPath);
  console.log("→ Running go mod tidy");
  execSync("go mod tidy", { stdio: "inherit" });

  console.log("→ Installing Air (hot-reload)");
  execSync("go install github.com/air-verse/air@latest", { stdio: "inherit" });
  
  console.log("✅ Go setup complete!");
} catch (err) {
  console.error("❌ Failed to set up Go backend:", err.message);
  process.exit(1);
}
