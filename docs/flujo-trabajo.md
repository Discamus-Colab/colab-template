# Flujo de trabajo (cómo colaboramos sin romper main)

Este repo es **código abierto** y `main` está protegido:

- ✅ Todos pueden: clonar, crear ramas, pushear **sus ramas** y abrir PRs.
- 🔒 Solo **Sergio (@Cassers)**: aprueba PRs, mergea y toca `main` directo.
  Está blindado con branch protection + CODEOWNERS, no es amenaza, es config.

## Paso a paso

```bash
# 1. Clona y entra
git clone https://github.com/Discamus-Colab/colab-template.git
cd colab-template
pnpm install

# 2. Crea tu rama (kebab-case, con tu nombre o el ticket: sc9sergio/COLAB-4-votacion)
git checkout -b <tu-usuario>/<descripcion-corta>

# 3. Chambea y verifica
pnpm dev     # desarrolla
pnpm lint    # en verde
pnpm build   # en verde (sagrado)

# 4. Sube tu rama y abre el PR contra main
git push -u origin <tu-rama>
# En GitHub: Compare & pull request → describe QUÉ y POR QUÉ → Create
```

## Qué pasa después

1. El PR pide **1 aprobación** y exige que sea de un code owner (Sergio).
   O sea: sin su ✅ no hay merge, aunque tu primo también apruebe.
2. Si pusheas cambios nuevos al PR, las aprobaciones viejas se descartan
   (dismiss stale reviews): Sergio revisa lo último, no recuerdos.
3. Solo Sergio puede mergear (único con permiso de push a `main`).
   Ni intenten el botón: GitHub no los dejará 😏

## Nombres de rama sugeridos

`<usuario>/<ticket>-<descripcion>` → `jhon/COLAB-4-demo-votacion`
