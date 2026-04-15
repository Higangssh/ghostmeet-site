# ghostmeet-site

Landing page for [ghostmeet](https://github.com/Higangssh/ghostmeet) — the invisible, self-hosted AI meeting assistant.

🔗 **Live**: https://ghostmeet.sshlab.dev

---

## Stack

- **Next.js 16** (static export — `output: 'export'`)
- **Tailwind CSS v4**
- **Motion** + **Lucide** icons
- Fonts: Bricolage Grotesque (display) + Geist Mono (body)
- Hosted on **Cloudflare Pages**

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Outputs static site to `/out`.

## Deploy (Cloudflare Pages, Git-connected)

Cloudflare Pages builds on every push to `main`.

**One-time setup:**
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git
2. Pick this repo, set:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output: `out`
   - Env var: `NODE_VERSION=20`
3. Add custom domain `ghostmeet.sshlab.dev` in Custom Domains.

After that, `git push` redeploys automatically.

## License

MIT
