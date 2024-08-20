-- CreateTable
CREATE TABLE "Cliente" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Aplicativo" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "custoMensal" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Assinatura" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codApp" INTEGER NOT NULL,
    "codCli" INTEGER NOT NULL,
    "inicioVigencia" DATETIME NOT NULL,
    "fimVigencia" DATETIME NOT NULL,
    CONSTRAINT "Assinatura_codApp_fkey" FOREIGN KEY ("codApp") REFERENCES "Aplicativo" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Assinatura_codCli_fkey" FOREIGN KEY ("codCli") REFERENCES "Cliente" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pagamento" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codAssinatura" INTEGER NOT NULL,
    "valorPago" REAL NOT NULL,
    "dataPagamento" DATETIME NOT NULL,
    CONSTRAINT "Pagamento_codAssinatura_fkey" FOREIGN KEY ("codAssinatura") REFERENCES "Assinatura" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");
