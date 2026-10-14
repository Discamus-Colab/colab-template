# `src/features/` — aquí grita el proyecto

Cada subcarpeta es una **feature con nombre del negocio**, no de la tecnología.
Si mañana este proyecto es el foro, aquí verás `foro/`, `hilos/`, `respuestas/`…
nunca `components/`, `utils/`, `helpers/` genéricos en la raíz.

## Anatomía de una feature

```
features/votacion/
  components/     UI de la feature (server primero, "use client" solo si hay interactividad)
  actions.ts      server actions (mutaciones: votar, crear, borrar…)
  schemas.ts      validación con zod (cuando la instalemos)
  lib/            lógica pura de la feature (conteo de votos, reglas…)
```

## Reglas

1. Las features **no se importan entre sí**. Lo compartido se sube a `shared/`.
2. `app/` solo importa de `features/` y `shared/`. Nada de lógica en las rutas.
3. Una feature nueva = una carpeta nueva. Si no sabes dónde va algo, probablemente es una feature nueva.
