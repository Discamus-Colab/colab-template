# Convenciones (léeme antes de picar código)

## TypeScript

- Estricto (`strict: true`). Nada de `any` paseando: si no sabes el tipo,
  pregúntale a Sergio o míralo en el error (los errores son pistas, no insultos).
- Tipos con `type`, interfaces solo si necesitas extender. Props de
  componentes siempre tipadas.

## Server primero, client solo si toca

- Todo componente es **server component** salvo que necesite interactividad
  (`useState`, `useEffect`, eventos del navegador) o APIs del browser.
- `"use client"` va en la hoja más pequeña posible, nunca en `layout.tsx`
  "por si acaso". Un `"use client"` en la raíz convierte todo en cliente
  y el profe llora.

## Nombres y archivos

- Componentes: `PascalCase.tsx` (`EncuestaDemo.tsx`). Funciones y variables:
  `camelCase`. Constantes: `UPPER_SNAKE`.
- Rutas: carpetas en `kebab-case` (`src/app/mi-ruta/page.tsx`).
- Imports con alias `@/` (`@/features/...`), nunca `../../../`. El alias
  apunta a `src/`.

## Data fetching y mutaciones

- Leer datos: `async` directo en server components o en `lib/` de la feature.
- Escribir datos: **server actions** (`"use server"` en `actions.ts` de la
  feature), no API routes salvo que un tercero las necesite.
- Este proyecto usa **Cache Components** (`cacheComponents: true`): las
  páginas se cachean por defecto. Si un dato debe ser fresco (votos en vivo),
  usa `cacheLife()` / `connection()` donde corresponda.

## Calidad mínima para abrir PR

```bash
npm run lint   # ESLint en verde
npm run build  # build en verde (esto es sagrado)
```

## Prohibido

- Secretos en el código. `.env.local` nunca se commitea (usa `.env.example`
  como plantilla).
- `console.log` olvidados, código comentado "por si acaso" y dependencias
  que nadie usa.
