# `src/shared/` — lo que usan 2+ features (y nada más)

Si solo lo usa una feature, vive en esa feature. Cuando la segunda feature
lo necesite, **ahí sí** se promueve a `shared/`. Nada de adivinar el futuro.

```
shared/
  components/   UI genérica (Tarjeta, EmptyState, Spinner…)
  lib/          funciones puras (fechas, formato, constantes…)
```

## Reglas

1. `shared/` **nunca importa de `features/`** (sería dependencia circular de ideas).
2. Componentes server por defecto; `"use client"` solo con interactividad real.
3. Sin lógica de negocio aquí: fechas y formatos sí, "quién puede votar" no.
