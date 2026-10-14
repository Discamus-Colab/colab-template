import Link from "next/link";

type TarjetaProps = {
  href: string;
  titulo: string;
  descripcion: string;
};

/**
 * Tarjeta de enlace reutilizable (server component: sin interactividad,
 * sin "use client"). Vive en `shared/` porque la puede usar cualquier página.
 */
export default function Tarjeta({ href, titulo, descripcion }: TarjetaProps) {
  const externa = href.startsWith("http");

  return (
    <Link
      href={href}
      {...(externa ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block rounded-2xl border border-black/10 p-6 transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
    >
      <h2 className="text-lg font-semibold">{titulo} →</h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{descripcion}</p>
    </Link>
  );
}
