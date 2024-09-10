export interface AssinaturaValidaRepositoryInterface {
  adicionarAssinatura(codass: number, expiraEm: number): Promise<void>;
  verificarAssinatura(codass: number): Promise<boolean>;
}
