CREATE DATABASE reciclo;
USE reciclo;


CREATE TABLE usuario
(
id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome varchar(80) NOT NULL,
email varchar(80) UNIQUE NOT NULL,
telefone varchar(14) NULL,
senha VARCHAR(80) NOT NULL,
nivel_acesso tinyint(1) DEFAULT 0 NOT NULL,
UNIQUE (email),
data datetime DEFAULT CURRENT_TIMESTAMP NOT NULL
);


INSERT INTO usuario
(nome, email, telefone, senha) VALUES
('Sr Adm', 'aaaa@aaaa.com', '33333333', '11111'),
('FulanoA', 'fulanoa@gmail.com', '44444444', '11111'),
('Alex', 'alex@gmail.com', '33333333', '11111'),
('Pablo', 'pablo@gmail.com', '44444444', '11111'),
('Willyan', 'will@gmail.com', '55555555', '11111');


CREATE TABLE endereco
(
id_endereco INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
id_usuario INT NOT NULL,
cep varchar(80) NOT NULL,
logradouro varchar(80) NOT NULL,
complemento varchar(80) NULL,
bairro VARCHAR(80) NOT NULL,
localidade VARCHAR(80) NOT NULL,
uf VARCHAR(80) NOT NULL,
numero VARCHAR(80) NOT NULL,
data datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
FOREIGN KEY (id_usuario)  REFERENCES  usuario (id_usuario)
);


INSERT INTO endereco (id_usuario, cep, logradouro, complemento, bairro, localidade, uf, numero) VALUES
(1,'05000-010','logradouro A','Bloco A', 'Bairro A', 'Localidade A', 'SP','10'),
(2,'05000-020','logradouro B','Bloco B', 'Bairro B', 'Localidade P', 'SP','20'),
(3,'05000-020','logradouro C','Bloco C', 'Bairro C', 'Localidade P', 'SP','30'),
(4,'05000-020','logradouro D','Bloco D', 'Bairro D', 'Localidade P', 'SP','40'),
(5,'05000-020','logradouro E','Bloco E', 'Bairro E', 'Localidade P', 'SP','50');


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


-- Obs: não é preciso por a data, pois pega automaticamente, porém para testar períodos, inseri datas
INSERT INTO reciclado (id_material, peso_total, data) VALUES

-- Registros do dia 07/01/2021
(1,5,'2021-01-07'),(2,20,'2021-01-07'),(3,20,'2021-01-07'),(4,20,'2021-01-07'),
(5,10,'2021-01-07'),(6,30,'2021-01-07'),(7,10,'2021-01-07'),(8,20,'2021-01-07'),

-- Registros do dia 14/02/2021
(1,5,'2021-01-14'),(2,20,'2021-01-14'),(3,20,'2021-01-14'),(4,20,'2021-01-14'),
(5,10,'2021-01-14'),(6,30,'2021-01-14'),(7,10,'2021-01-14'),(8,20,'2021-01-14'),

-- Registros do dia 21/02/2021
(1,20,'2021-01-21'),(2,20,'2021-01-21'),(3,20,'2021-01-21'),(4,20,'2021-01-21'),
(5,20,'2021-01-21'),(6,20,'2021-01-21'),(7,20,'2021-01-21'),(8,20,'2021-01-21'),

-- Registros do dia 28/02/2021
(1,20,'2021-01-28'),(2,20,'2021-01-28'),(3,20,'2021-01-28'),(4,20,'2021-01-28'),
(5,20,'2021-01-28'),(6,20,'2021-01-28'),(7,20,'2021-01-28'),(8,20,'2021-01-28');



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



-- Lógicas

-- Nível acesso

-- Update usuario set nivel_acesso = 1 WHERE id_usuario = 1;
