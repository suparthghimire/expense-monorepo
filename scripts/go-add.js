const { execSync } = require("child_process");
const path = require("path");

const dep = process.argv[2];

if (!dep) {
  console.error("❌ Please provide a Go package name");
  process.exit(1);
}

const serverDir = path.resolve(__dirname, "../apps/server");

console.log(`📦 Installing Go package: ${dep}`);
try {
  execSync(`go get ${dep}`, {
    cwd: serverDir,
    stdio: "inherit",
  });

  console.log("✅ go.mod and go.sum updated.");
} catch (err) {
  console.error("❌ Failed to install package:", err.message);
  process.exit(1);
}
