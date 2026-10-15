# Colab Template 🕊️

Template Next.js para los proyectos de clase de **Discamus Colab**.
Stack: **Next.js 16 + React 19 + TypeScript + Tailwind CSS v4**,
App Router, Turbopack y Cache Components.

## Arranque rápido

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

## Scripts

| Comando       | Para qué                              |
|---------------|---------------------------------------|
| `pnpm dev`   | Desarrollo con Turbopack              |
| `pnpm build` | Build de producción (debe estar verde)|
| `pnpm start` | Servir el build                       |
| `pnpm lint`  | ESLint (debe estar verde)             |

## Estructura (screaming architecture)

```
src/
  app/        Rutas delgadas (componen, no calculan)
  features/   El negocio por feature (ej: votacion/)
  shared/     Reutilizable: components/ + lib/
docs/         Documentación del proyecto (empieza aquí 👇)
```

## Docs

- [Arquitectura](./docs/arquitectura.md) — qué es screaming architecture y el mapa del proyecto
- [Convenciones](./docs/convenciones.md) — reglas antes de picar código
- [Flujo de trabajo](./docs/flujo-trabajo.md) — ramas, PRs y quién aprueba
- [Primer proyecto](./docs/primer-proyecto.md) — cómo nace un proyecto real desde aquí

## Colaborar

Repo abierto: todos pueden crear ramas y abrir PRs.
`main` protegido: **solo Sergio (@Cassers) aprueba y mergea**.
Lee [flujo de trabajo](./docs/flujo-trabajo.md) antes de tu primer PR.
