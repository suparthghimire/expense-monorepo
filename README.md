# 💸 Expense Tracker (Monorepo)

An over engineered expense tracker app

---

## 🛠 Tech Stack

### Monorepo Management
- [Turborepo](https://turbo.build/) — for managing apps/packages in a single repo
- [pnpm](https://pnpm.io/) — fast package manager for workspace projects

### Backend (API)
- [Go (Golang)](https://golang.org/) — server language
- [AWS Lambda](https://aws.amazon.com/lambda/) — serverless backend
- [API Gateway](https://aws.amazon.com/api-gateway/) — exposes HTTP endpoints
- [Ent](https://entgo.io/) — ORM for database modeling
- [NeonDB](https://neon.tech/) — serverless Postgres database
- [Atlas CLI](https://atlasgo.io/) — database schema migrations
- [Air](https://github.com/cosmtrek/air) — live reload during development

### Frontend (Web)
- [React](https://react.dev/) + [Vite](https://vitejs.dev/) — fast development and build
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Vercel](https://vercel.com/) — deployment

### Mobile
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) — build and publish native apps
- [EAS CLI](https://docs.expo.dev/eas-update/introduction/) — CI for mobile builds


### CI/CD
- [GitHub Actions](https://github.com/features/actions) — automated workflows
  - Conditional deploys per folder
  - Backend deployment + migrations
  - Frontend & mobile deploys
- [Discord Webhooks](https://discord.com/developers/docs/resources/webhook) — notifications for deployments
- [Terraform](https://www.terraform.io/) — deploy AWS infrastructure (Lambda, Gateway, certs)
- [Discord Webhooks](https://discord.com/developers/docs/resources/webhook) — deployment notifications


---

## 📂 Folder Structure

```
apps/
  ├── server/        # Go backend (Lambda-ready)
  ├── web-app/       # Vite + React frontend (PWA for mobile support)
  └── home-page/    # Expo mobile app
  

packages/
  └── ui/            # Shared UI components (web/mobile)

.github/workflows/   # GitHub Actions CI/CD configs
```

---

## ⚙️ Local Setup

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/expense-tracker.git
cd expense-tracker

# Install dependencies
pnpm install

# Start web app
cd apps/web-app
pnpm dev

# Start backend (Go)
cd apps/server
air  # or: go run main.go
```

---

## 🚀 Deployment

Deployments are handled automatically via GitHub Actions:

- ✅ Backend deploys to AWS Lambda (with Terraform)
- ✅ DB migrations applied to NeonDB (via Atlas)
- ✅ Web deploys to Vercel
- ✅ Mobile builds/publishes via EAS
- ✅ Discord notifications for each step

---

## 📘 To Do

- [ ] Complete mobile app UI
- [ ] Add OCR receipt processing
- [ ] Implement heatmap visualization
- [ ] Add import CSV support
- [ ] Finish homepage & deploy

---

## 📄 License

MIT © [Your Name]
