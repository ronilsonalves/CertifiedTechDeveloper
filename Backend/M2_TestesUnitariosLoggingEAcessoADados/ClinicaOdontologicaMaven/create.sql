CREATE SCHEMA IF NOT EXISTS clinica;
-- 1 - Criação das tabelas com as chaves primárias
CREATE TABLE IF NOT EXISTS clinica.enderecos (
    id_endereco INT NOT NULL AUTO_INCREMENT,
    rua VARCHAR (60),
    numero VARCHAR (5),
    cidade VARCHAR (60),
    estado VARCHAR (60),
    --`id_paciente` INT,

    PRIMARY KEY(id_endereco)
    --CONSTRAINT `fkpaciente`
    --    FOREIGN KEY(`id_paciente`)
    --    REFERENCES `clinica`.`pacientes`(`id_paciente`)
);

-- 2 - Criação das tabelas com as chaves primárias
CREATE TABLE IF NOT EXISTS clinica.pacientes (
    id_paciente INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR (60),
    sobrenome VARCHAR (60),
    rg VARCHAR (15),
    data_cadastro DATE,
    id_endereco INT,

    PRIMARY KEY(id_paciente),
    CONSTRAINT fkendereco
        FOREIGN KEY(id_endereco)
        REFERENCES clinica.enderecos(id_endereco)
);

-- 2 - Criação das tabelas com as chaves primárias
CREATE TABLE IF NOT EXISTS clinica.dentistas (
    matricula INT NOT NULL,
    nome VARCHAR (60),
    sobrenome VARCHAR(60),

    PRIMARY KEY (matricula)
);

