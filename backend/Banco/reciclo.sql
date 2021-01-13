CREATE DATABASE reciclo;
USE reciclo;
DROP database reciclo;

CREATE TABLE usuario
(
id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome varchar(80) NOT NULL,
email varchar(80) NOT NULL,
telefone int(14) NULL,
senha VARCHAR(80) NOT NULL,
nivel_acesso tinyint(1) DEFAULT 0 NOT NULL,
data datetime DEFAULT CURRENT_TIMESTAMP NOT NULL
);

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
id_usuario int NOT NULL,
id_material int NOT NULL,
peso_total decimal(8,2),
-- valor_total decimal(8,2) generated always as (peso_total * id_material) STORED,
data datetime DEFAULT CURRENT_TIMESTAMP NOT null,
FOREIGN KEY (id_usuario)  REFERENCES  usuario (id_usuario),
FOREIGN KEY (id_material)  REFERENCES  material (id_material)
);




drop table reciclado;

-- Obs: não é preciso por a data, pois pega automaticamente, porém para testar períodos, inseri datas
INSERT INTO reciclado (id_usuario, id_material, peso_total, data) VALUES
(1,2,20,'2020-12-20 21:02:19'),(1,5,5,'2020-12-20 21:02:19'),
(2,1,20,'2021-01-01 21:02:19'),(2,1,10,'2021-01-01 21:02:19'),
(3,3,20,'2021-01-12 21:02:19');





-- Seleção sem data
SELECT usuario.nome, usuario.id_usuario, material.id_material, reciclado.id_reciclado, material.nome, material.preco_kg, reciclado.peso_total,
(material.preco_kg * reciclado.peso_total) as `Valor Total`
FROM reciclado inner join material 
ON reciclado.id_material = material.id_material
inner join usuario
ON usuario.id_usuario = reciclado.id_usuario;

-- Seleção com base em data
SELECT usuario.nome, usuario.id_usuario, material.id_material, reciclado.id_reciclado, material.nome, material.preco_kg, reciclado.peso_total,
(material.preco_kg * reciclado.peso_total) as `Valor Total`, reciclado.data
FROM reciclado inner join material 
ON reciclado.id_material = material.id_material
inner join usuario
ON usuario.id_usuario = reciclado.id_usuario
WHERE reciclado.data between '2020-12-20' and '2020-12-21';



CREATE TABLE mensagem
(
id_mensagem int AUTO_INCREMENT PRIMARY KEY,
assunto varchar(80) NOT null,
nome varchar (80) not null,
email varchar (80) not null,
telefone int(14) null,
DATA datetime DEFAULT (CURRENT_TIMESTAMP)

);

