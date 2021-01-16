CREATE DATABASE reciclo;
USE reciclo;


CREATE TABLE usuario
(
id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome varchar(80) NOT NULL,
email varchar(80) NOT NULL,
telefone varchar(14) NULL,
senha VARCHAR(80) NOT NULL,
nivel_acesso tinyint(1) DEFAULT 0 NOT NULL,
data datetime DEFAULT CURRENT_TIMESTAMP NOT NULL
);

SELECT * FROM usuario;
INSERT INTO usuario
(nome, email, telefone, senha) VALUES 
('Alex', 'alex@gmail.com', '33333333', '11111'),
('Pablo', 'pablo@gmail.com', '44444444', '11111'),
('Willyan', 'will@gmail.com', '55555555', '11111');


CREATE TABLE endereco
(
id_endereco INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
id_usuario INT NOT NULL,
cep varchar(80) NOT NULL,
logradouro varchar(80) NOT NULL,
complemento varchar(80) NOT NULL,
bairro VARCHAR(80) NOT NULL,
localidade VARCHAR(80) NOT NULL,
uf VARCHAR(80) NOT NULL,
numero VARCHAR(80) NOT NULL,
data datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
FOREIGN KEY (id_usuario)  REFERENCES  usuario (id_usuario)
);



INSERT INTO endereco (id_usuario, cep, logradouro, complemento, bairro, localidade, uf, numero) VALUES
(1,'05000-010','logradouro A','complemento A', 'bairro A', 'localidade A', 'uf A','10'),
(2,'05000-020','logradouro P','complemento P', 'bairro P', 'localidade P', 'uf P','20'),
(3,'05000-030','logradouro W','complemento W', 'bairro W', 'localidade W', 'uf W','30');

SELECT * FROM usuario;
SELECT * FROM endereco;

SELECT count(id_usuario)+1 FROM endereco;



CREATE TABLE material
(
id_material INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome varchar(80) NOT null,
preco_kg decimal(8,2),
data datetime DEFAULT CURRENT_TIMESTAMP not null

);

INSERT INTO `material` (`nome`, `preco_kg`, `data`) VALUES
('papelao', '0.70', '2021-01-12 17:10:13'),
('papel branco', '0.65', '2021-01-12 17:11:16'),
('papel misto', '0.00', '2021-01-12 17:18:20'),
('lata de aluminio', '5.30', '2021-01-12 17:18:20'),
('cobre', '29.00', '2021-01-12 17:21:10'),
('vidro', '0.18', '2021-01-12 17:21:10'),
('plastico rigido', '1.85', '2021-01-12 17:23:57'),
('pet', '0.28', '2021-01-12 17:23:57');

CREATE TABLE reciclado
(
id_reciclado int AUTO_INCREMENT PRIMARY KEY,
id_material int NOT NULL,
peso_total decimal(8,2),
-- valor_total decimal(8,2) generated always as (peso_total * id_material) STORED,
data datetime DEFAULT CURRENT_TIMESTAMP NOT null,
FOREIGN KEY (id_material)  REFERENCES  material (id_material)
);

SELECT * FROM reciclado;
truncate reciclado;

-- drop table reciclado;

-- Obs: não é preciso por a data, pois pega automaticamente, porém para testar períodos, inseri datas
INSERT INTO reciclado (id_material, peso_total, data) VALUES
-- Registros do dia 20/12/2020
(1,5,'2020-12-20 00:00:00'),(2,20,'2020-12-20 00:00:00'),(3,20,'2020-12-20 00:00:00'),(4,20,'2020-12-20 00:00:00'),
(5,10,'2020-12-20 00:00:00'),(6,30,'2020-12-20 00:00:00'),(7,10,'2020-12-20 00:00:00'),(8,20,'2020-12-20 00:00:00'),

-- Registros do dia 27/12/2020
(1,20,'2020-12-27 00:00:00'),(2,20,'2020-12-27 00:00:00'),(3,20,'2020-12-27 00:00:00'),(4,20,'2020-12-27 00:00:00'),
(5,20,'2020-12-27 00:00:00'),(6,20,'2020-12-27 00:00:00'),(7,20,'2020-12-27 00:00:00'),(8,20,'2020-12-27 00:00:00'),


-- Registros do dia 03/01/2021
(1,20,'2021-01-03 00:00:00'),(2,20,'2021-01-03 00:00:00'),(3,20,'2021-01-03 00:00:00'),(4,20,'2021-01-03 00:00:00'),
(5,20,'2021-01-03 00:00:00'),(6,20,'2021-01-03 00:00:00'),(7,20,'2021-01-03 00:00:00'),(8,20,'2021-01-03 00:00:00');



-- Seleção sem data
SELECT material.id_material, reciclado.id_reciclado, material.nome, material.preco_kg, reciclado.peso_total,
(material.preco_kg * reciclado.peso_total) as `Valor Total`, DATE_FORMAT(reciclado.data, "%d/%m/%Y") as ` Data Comum`
FROM reciclado inner join material 
ON reciclado.id_material = material.id_material
order by  DATE_FORMAT(reciclado.data, "%d/%m/%Y");


-- Seleção com base em data
SELECT material.id_material, material.nome, material.preco_kg, reciclado.peso_total,
(material.preco_kg * reciclado.peso_total) as `Valor Total`, DATE_FORMAT(reciclado.data, "%d/%m/%Y") as ` Data Comum`
FROM reciclado inner join material 
ON reciclado.id_material = material.id_material
WHERE reciclado.data between '2020-12-20' and '2021-12-21';



CREATE TABLE mensagem
(
id_mensagem int AUTO_INCREMENT PRIMARY KEY,
assunto varchar(80) NOT null,
nome varchar (80) not null,
email varchar (80) not null,
telefone varchar(14) null,
data datetime DEFAULT CURRENT_TIMESTAMP not null
);

INSERT INTO mensagem (assunto, nome, email, telefone) VALUES
('reciclados','fulanoA','fulanoA@email.com','3333-3333'),
('parcerias','fulanoB','fulanoB@email.com','4444-4444'),
('sugestoes','fulanoC','fulanoC@email.com','5555-5555');









