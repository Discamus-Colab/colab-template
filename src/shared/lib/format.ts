/**
 * Helpers compartidos. Solo funciones puras y genéricas:
 * nada que huela a una feature concreta (eso vive en `features/`).
 */

export function formatearFecha(fecha: Date): string {
  return new Intl.DateTimeFormat("es-CO", {
    dateStyle: "full",
    timeZone: "America/Bogota",
  }).format(fecha);
}
