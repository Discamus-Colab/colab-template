# Arquitectura: que el proyecto grite

> "Screaming architecture": al abrir `src/`, la estructura debe gritarte
> **de qué trata el proyecto**, no con qué framework está hecho.
> — Idea de Robert C. Martin, aplicada a Next.js App Router.

## El mapa

```
colab-template/
  src/
    app/            RUTAS delgadas. Cada page.tsx compone, no calcula.
    features/       EL NEGOCIO, por feature: votacion/, foro/, noticias/…
    shared/         Lo reutilizable entre features: components/ y lib/
  docs/             Esto que estás leyendo (empieza por aquí, en serio).
  public/           Archivos estáticos (imágenes, favicon…).
```

## Las 3 reglas de oro

1. **`app/` no piensa.** Una ruta importa componentes de `features/` y los
   ordena en pantalla. Si tu `page.tsx` tiene más de ~40 líneas, esa lógica
   pide a gritos su propia feature.
2. **Las features no se hablan entre sí.** `foro/` no importa de `votacion/`.
   Si dos features necesitan lo mismo, eso se promueve a `shared/`.
3. **`shared/` no sabe del negocio.** Fechas, formatos y UI genérica sí;
   "quién puede votar" no (eso es de `votacion/`).

## Ejemplo guiado: la demo de votación

- Ruta: `src/app/votacion/page.tsx` → server component, solo compone.
- Lógica/UI: `src/features/votacion/components/EncuestaDemo.tsx` → client
  component porque hay `useState` (interactividad = `"use client"`).
- Ayuda genérica: `src/shared/lib/format.ts` → `formatearFecha()` la puede
  usar cualquier feature.
- UI genérica: `src/shared/components/Tarjeta.tsx` → la usa el home.

Cuando conectemos base de datos, los votos saldrán de `features/votacion/`
(una `actions.ts` con server actions) y la demo seguirá viéndose igual
desde fuera. Esa es la gracia: **la estructura aguanta el crecimiento**.
