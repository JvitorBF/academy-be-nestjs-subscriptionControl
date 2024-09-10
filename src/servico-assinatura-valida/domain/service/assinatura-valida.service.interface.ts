export interface AssinaturaValidaServiceInterface {
  adicionarAssinatura(codass: number, expiraEm: number): Promise<void>;
  verificarAssinatura(codass: number): Promise<boolean>;
}
