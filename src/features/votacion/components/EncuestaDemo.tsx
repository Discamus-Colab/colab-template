"use client";

import { useState } from "react";

const OPCIONES = ["Martes", "Miércoles"] as const;
type Opcion = (typeof OPCIONES)[number];

/**
 * Demo de la feature `votacion` (COLAB-4): encuesta Martes vs Miércoles.
 * Client component porque hay interactividad (useState). Los votos viven
 * en memoria del navegador: cuando conectemos base de datos, esto se
 * reemplaza por una server action en `features/votacion/actions.ts`.
 */
export default function EncuestaDemo() {
  const [votos, setVotos] = useState<Record<Opcion, number>>({
    Martes: 0,
    Miércoles: 0,
  });

  function votar(opcion: Opcion) {
    setVotos((prev) => ({ ...prev, [opcion]: prev[opcion] + 1 }));
  }

  const total = votos.Martes + votos["Miércoles"];

  return (
    <div className="w-full max-w-md rounded-2xl border border-black/10 p-6 dark:border-white/15">
      <h2 className="text-xl font-semibold">¿Qué día votamos?</h2>
      <div className="mt-4 flex flex-col gap-3">
        {OPCIONES.map((opcion) => {
          const cantidad = votos[opcion];
          const pct = total === 0 ? 0 : Math.round((cantidad / total) * 100);
          return (
            <button
              key={opcion}
              type="button"
              onClick={() => votar(opcion)}
              className="rounded-xl border border-black/10 px-4 py-3 text-left transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
            >
              <span className="flex justify-between font-medium">
                <span>{opcion}</span>
                <span>
                  {cantidad} voto(s) · {pct}%
                </span>
              </span>
              <span className="mt-2 block h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/15">
                <span
                  className="block h-full rounded-full bg-foreground transition-all"
                  style={{ width: `${pct}%` }}
                />
              </span>
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
        Total: {total} voto(s). Sin base de datos por ahora: el que recargue la
        página, pierde 😏
      </p>
    </div>
  );
}
