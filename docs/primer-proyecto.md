# Arrancar un proyecto real desde esta template

Esta template es el **punto de partida** de los proyectos de clase
(votación COLAB-4, foro COLAB-6, periódico COLAB-7, wiki visual COLAB-8…).
No se chambea directo aquí: cada proyecto nace como copia.

## Opción A: copiar la carpeta (clases en vivo ⚡)

```bash
cd /home/sergio_castro/Proyectos
cp -r colab-template votacion   # o foro, periodico…
cd votacion
rm -rf .git && git init -b main  # historia limpia para el proyecto nuevo
npm install
npm run dev
```

## Opción B: repo nuevo desde GitHub

Crea el repo vacío en la org, clónalo y copia el contenido de la template
(excepto `.git`).

## Después de copiar: checklist del proyecto nuevo

1. `package.json` → cambia `"name"` a `votacion` (o el que toque).
2. `src/app/page.tsx` y `layout.tsx` → título y descripción del proyecto real.
3. Borra la demo (`src/app/votacion/`, `src/features/votacion/`) cuando la
   feature real la reemplace… o mejor: **úsala de molde** (cópiala y adapta).
4. Crea tu primera feature en `src/features/<tu-feature>/` siguiendo
   [arquitectura.md](./arquitectura.md).
5. Actualiza este `docs/` con lo propio del proyecto (la template es guía,
   el proyecto manda).

## Qué NO hacer

- No desarrolles el proyecto real dentro de `colab-template/`: la template
  se mantiene limpia y mínima.
- No cambies las reglas de `main` del proyecto nuevo sin Sergio: mismo
  esquema (todos ramean, solo él aprueba y mergea).
