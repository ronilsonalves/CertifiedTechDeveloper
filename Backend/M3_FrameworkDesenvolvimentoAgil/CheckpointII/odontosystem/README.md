# Entrega P1 - Checkpoint II - Backend
Código escrito por [Ronilson Alves](https://linkedin./in/ronilsonalves) para o <b>Checkpoint II</b> da disciplina de
Backend
do Certified Tech Developer oferecido pelo <b>Mercado Livre</b> e <b>Globant</b> em parceria com a <b>Digital House</b>.

## Objetivo

Partindo da entrega do Checkpoint I - [<b>você pode visualizar o código aqui</b>](https://github.com/ronilsonalves/CertifiedTechDeveloper/tree/main/Backend/M2_TestesUnitariosLoggingEAcessoADados/ClinicaOdontologicaMaven), refatoramos o nosso projeto utilizando o <b>Springboot</b> para construirmos uma API Rest para nossas entidates <b>Pacientes, Endereços, Dentistas & Consultas</b>. Fazendo a conexão com banco 
de dados MySQL.

O objetivo final é entregar uma API Rest funcional utilizando-se sempre das boas práticas de programação e aplicando os conceitos vistos no módulo 3 da disciplina de Backend.

## O desafio

Uma clínica odontológica precisa informatizar suas operações. Por isso, nos
pedem um sistema para gerenciamento de seus pacientes, onde possam
cadastrá-los, buscá-los, excluí-los e modificá-los, acrescido a isso, foi necessário replicar essas funcionalidades 
para o gerenciamento dos dentistas da clínica e gerenciar suas consultas.

## Endpoints

### /paciente
`http://localhost:8080/paciente` - Métodos GET, PUSH e PUT para obtenção, criação e atualização de pacientes.

<smal>Abaixo um exemplo de body JSON para cadastro (PUSH) - para atualizar (PUT), adicione o atributo `"id": 1`, 
onde 1 pode ser qualquer um dos obtidos com o método de listar pacientes (GET).
</small>
```json
{
	"nome": "Ronilson",
	"sobrenome": "Silva",
	"rg": "1245454",
	"dataCadastro": "{% now 'iso-8601', '' %}",
	"endereco": {
		"rua": "Rua 1",
		"numero": 25,
		"cidade": "Capinzal",
		"estado": "Maranhão"
	}
}
```

`http://localhost:8080/paciente/{id}` - Métodos GET e DELETE para obtenção e exclusão de paciente (por id).

Abaixo um exemplo de resposta de um GET (por id)

```json
{
  "id": 6,
  "nome": "Ronilson",
  "sobrenome": "Silva",
  "rg": "1245454",
  "dataCadastro": "2021-11-26T14:12:01",
  "endereco": {
    "id": 6,
    "rua": "Rua 1",
    "numero": "25",
    "cidade": "Capinzal",
    "estado": "Maranhão"
  }
}
```

### /dentista
`http://localhost:8080/dentista` - Métodos GET, POST e PUT para obtenção, criação e atualização de dentistas.

Abaixo um exemplo
```json
{
"nome": "João",
"sobrenome": "Nascimento",
"matricula": 1234567
}
```

`http://localhost:8080/dentista/{id}` - Métodos GET e DELETE para obtenção e exclusão de dentista (por id).

Abaixo um exemplo de um GET por Id
```json
{
"id": 6,
"nome": "João",
"sobrenome": "Nascimento",
"matricula": 1234567
}
```
### /consulta
`http://localhost:8080/consulta` - Métodos GET, POST e PUT para obtenção, criação e atualização de consultas.

Abaixo um exemplo de JSON para o cadastro (POST)
```json
{
	"paciente": {
		"nome": "Paciente 2",
		"sobrenome": "Sobrenome 2",
		"rg": "6546561",
		"dataCadastro": "{% now 'iso-8601', '' %}",
		"endereco": {
			"rua": "Rua Paciente 2",
			"numero": 154,
			"cidade": "Cidade Paciente 2",
			"estado": "Estado Paciente 2"
		}
	},
	"dentista": {
		"nome": "Dentista P2",
		"sobrenome": "Sobrenome D2",
		"matricula": 165465
	},
	"data": "{% now 'iso-8601', '' %}"
}
```
`http://localhost:8080/consulta/{id}` - Métodos GET e DELETE para obtenção e exclusão de consultas (por id).

Abaixo o exemplo de um GET por ID
```json
{
	"id": 2,
	"paciente": {
		"id": 8,
		"nome": "Paciente 2",
		"sobrenome": "Sobrenome 2",
		"rg": "6546561",
		"dataCadastro": "2021-11-26T14:39:18",
		"endereco": {
			"id": 8,
			"rua": "Rua Paciente 2",
			"numero": "154",
			"cidade": "Cidade Paciente 2",
			"estado": "Estado Paciente 2"
		}
	},
	"dentista": {
		"id": 2,
		"nome": "Dentista P2",
		"sobrenome": "Sobrenome D2",
		"matricula": 165465
	},
	"data": "2021-11-26T14:39:18"
}
```