import { Suspense } from "react";
import { connection } from "next/server";
import EncuestaDemo from "@/features/votacion/components/EncuestaDemo";
import { formatearFecha } from "@/shared/lib/format";

export const metadata = {
  title: "Demo: votación | Colab Template",
  description: "Feature de ejemplo con screaming architecture.",
};

/**
 * Ruta DELGADA (server component): no hay lógica aquí, solo compone.
 * La página importa de `features/` y `shared/`, nunca al revés.
 *
 * La fecha se calcula en cada request (`connection()`), así que vive en un
 * componente async envuelto en `<Suspense>`: Cache Components prerenderiza
 * por defecto y el acceso dinámico fuera de Suspense bloquea el build.
 * Patrón oficial: dinámico adentro, placeholder afuera.
 */
async function FechaHoy() {
  await connection();
  return (
    <p className="text-sm text-zinc-500">
      Hoy es {formatearFecha(new Date())}
    </p>
  );
}

export default function VotacionPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center gap-6 px-6 py-16">
      <Suspense
        fallback={<p className="text-sm text-zinc-500">Cargando fecha…</p>}
      >
        <FechaHoy />
      </Suspense>
      <h1 className="text-3xl font-bold tracking-tight">
        Sistema de votación (demo)
      </h1>
      <p className="max-w-xl text-center text-zinc-600 dark:text-zinc-400">
        Mini-adelanto del COLAB-4. Esta página solo compone: la lógica vive en{" "}
        <code className="rounded bg-black/[.06] px-1 font-mono text-[0.9em] dark:bg-white/[.08]">
          features/votacion/
        </code>
        . Así se ve screaming architecture en acción.
      </p>
      <EncuestaDemo />
    </main>
  );
}
