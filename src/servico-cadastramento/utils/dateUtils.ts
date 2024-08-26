export function calcularStatusAssinatura(fimVigencia: Date): "ATIVA" | "CANCELADA" {
  return fimVigencia > new Date() ? 'ATIVA' : 'CANCELADA';
}
