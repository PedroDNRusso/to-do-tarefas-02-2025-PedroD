/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `tarefa` table. All the data in the column will be lost.
  - You are about to alter the column `nome` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - Added the required column `usuario` to the `tarefa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tarefa` DROP FOREIGN KEY `tarefa_usuarioId_fkey`;

-- DropIndex
DROP INDEX `tarefa_usuarioId_fkey` ON `tarefa`;

-- AlterTable
ALTER TABLE `tarefa` DROP COLUMN `usuarioId`,
    ADD COLUMN `usuario` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `usuario` MODIFY `nome` VARCHAR(100) NOT NULL;
