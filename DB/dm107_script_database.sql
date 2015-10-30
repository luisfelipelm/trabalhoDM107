CREATE TABLE `dm107`.`entregas` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '',
  `id_pedido` INT UNSIGNED NOT NULL COMMENT '',
  `id_cliente` INT UNSIGNED NOT NULL COMMENT '',
  `nome_recebedor` VARCHAR(100) COMMENT '',
  `cpf_recebedor` VARCHAR(11) COMMENT '',
  `endereco` VARCHAR(100) NOT NULL COMMENT '',
  `bairro` VARCHAR(100) NOT NULL COMMENT '',
  `cidade` VARCHAR(100) NOT NULL COMMENT '',
  `estado` VARCHAR(45) NOT NULL COMMENT '',
  `pais` VARCHAR(45) NOT NULL COMMENT '',
  `recebedor_entregador` TINYINT COMMENT '',
  `data_entrega` DATETIME COMMENT '',
  `localizacao_geografica` VARCHAR(100) NOT NULL COMMENT '',
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)  COMMENT '',
  UNIQUE INDEX `id_UNIQUE` (`id` ASC)  COMMENT '');

INSERT INTO `dm107`.`entregas`
(`id_pedido`,
`id_cliente`,
`nome_recebedor`,
`cpf_recebedor`,
`endereco`,
`bairro`,
`cidade`,
`estado`,
`pais`,
`recebedor_entregador`,
`data_entrega`,
`localizacao_geografica`,
`status`)
VALUES
(
1,
2,
'Luis Felipe',
'12345678900',
'Rua Teste 509',
'Bairro Teste',
'Cidade Teste',
'Estado Teste',
'Pais Teste',
true,
'2015/01/01 22:00:12',
'localizacao geografica',
'DELIVERED');

INSERT INTO `dm107`.`entregas`
(`id_pedido`,
`id_cliente`,
`nome_recebedor`,
`cpf_recebedor`,
`endereco`,
`bairro`,
`cidade`,
`estado`,
`pais`,
`recebedor_entregador`,
`localizacao_geografica`,
`status`)
VALUES
(
3,
4,
'Crislaine',
'88888888888',
'Rua 8',
'Bairro Teste',
'Cidade Teste',
'Estado Teste',
'Pais Teste',
true,
'localizacao geografica',
'DELIVERED');

INSERT INTO `dm107`.`entregas`
(`id_pedido`,
`id_cliente`,
`endereco`,
`bairro`,
`cidade`,
`estado`,
`pais`,
`localizacao_geografica`,
`status`)
VALUES
(
1,
3,
'Rua Teste 509',
'Bairro Teste',
'Cidade Teste',
'Estado Teste',
'Pais Teste',
'localizacao geografica',
'NEW');


CREATE TABLE `dm107`.`user` (
  `iduser` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '',
  `name` VARCHAR(100) NOT NULL COMMENT '',
  `email` VARCHAR(100) NOT NULL COMMENT '',
  `password` VARCHAR(100) NOT NULL COMMENT '',
  `role` VARCHAR(45) NOT NULL COMMENT '',
  `token` VARCHAR(200) COMMENT '',
  PRIMARY KEY (`iduser`)  COMMENT '',
  UNIQUE INDEX `iduser_UNIQUE` (`iduser` ASC)  COMMENT '',
  UNIQUE INDEX `email_UNIQUE` (`email` ASC)  COMMENT '');
 
 
INSERT INTO `dm107`.`user`
(`name`,
`email`,
`password`,
`role`)
VALUES
('admin',
'admin@admin.com',
'admin',
'ADMIN');

 
INSERT INTO `dm107`.`user`
(`name`,
`email`,
`password`,
`role`)
VALUES
('Luis Felipe',
'luisfelipelmtc@gmail.com',
'luisfelipe',
'USER');