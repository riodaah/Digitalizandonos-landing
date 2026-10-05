# Darmi — darmi.cl

Sitio de presentación de **Darmi**, agencia de automatización con IA (antes Digitalizándonos).

- Stack: React 18 + Vite + Tailwind CSS + Framer Motion
- Hosting: Vercel (proyecto `digitalizandonos-landing`), despliegue automático desde `main`
- Dominio principal: https://www.darmi.cl (darmi.cl redirige a www)

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # build de producción en dist/
```

## Dónde editar

- Datos de contacto y marca: `src/config.json`
- Textos SEO, Open Graph y JSON-LD: `index.html`
- Secciones: `src/components/` (Hero, SectionServices, SectionProcess, SectionAbout, SectionContact, Footer)
- `public/robots.txt`, `public/sitemap.xml`, `public/og-darmi.png` (imagen para compartir 1200×630)
