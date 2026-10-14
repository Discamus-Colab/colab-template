import Tarjeta from "@/shared/components/Tarjeta";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-8 px-6 py-16">
      <div>
        <p className="text-sm font-medium text-zinc-500">
          Discamus Colab 🕊️ · Template base
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Colab Template
        </h1>
        <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Punto de partida Next.js para los proyectos de clase: rutas delgadas
          en <code>app/</code>, lógica por feature en{" "}
          <code>features/</code> y lo reutilizable en <code>shared/</code>.
          Si la estructura no te grita de qué trata el proyecto, algo hicimos
          mal 😏
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Tarjeta
          href="/votacion"
          titulo="Demo: votación"
          descripcion="Mini-adelanto del sistema de votación (COLAB-4). Client component con estado local."
        />
        <Tarjeta
          href="https://github.com/Discamus-Colab/colab-template/tree/main/docs"
          titulo="Docs del proyecto"
          descripcion="Arquitectura, convenciones, flujo de trabajo con PRs y cómo arrancar un proyecto real."
        />
        <Tarjeta
          href="https://nextjs.org/docs"
          titulo="Docs de Next.js"
          descripcion="La fuente oficial cuando esta template no te alcance."
        />
        <Tarjeta
          href="https://github.com/Discamus-Colab/colab-template"
          titulo="Repo en GitHub"
          descripcion="Código abierto. Ramea libre, pero main y merges son territorio de Sergio."
        />
      </div>
    </main>
  );
}
