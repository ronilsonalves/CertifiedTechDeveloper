package com.ronilsonalves.fabricadesoftware.app;

import com.ronilsonalves.fabricadesoftware.entidades.*;
import com.ronilsonalves.fabricadesoftware.enums.*;

import java.util.ArrayList;

public class SysEscola {
    // Armazenamento de alunos
    protected ArrayList<Aluno> alunos = new ArrayList<Aluno>(10);
    // Criacao dos profs:
    private Professor professorInformatica = new Professor("Laura Alves","410.401.096-08","lauraAlves@directschool" +
            ".edu","(24) 4179-3494",Sexo.Feminino,new Endereco("Rua Oitocentos e Cinquenta-A",373,"Casa","Centro",
            "27258-360","Volta Redonda","RJ"),60.00, Formacao.Superior);
    private Professor professorIngles = new Professor("Juliana Mendonça","851.182.131-77","julianaeme@directschool" +
            ".edu","(15) 3430-3164",Sexo.Feminino,new Endereco("Rua Joaquim Duarte",66,"Casa","Centro",
            "18117-080","Votorantim","SP"),50.00, Formacao.Pós_Graduação);
    private Professor professorAdmin = new Professor("Vitor Fernandes","608.033.101-29","vitor.adm@directschool" +
            ".edu","(15) 3430-3164",Sexo.Nao_Binario,new Endereco("Rua Madre Tereza de Calcutá",1100,"Casa","Centro",
            "06787-545","Taboão da Serra","SP"),65.00, Formacao.Mestrado);

    // Criação das Salas:
    protected Sala salaDeInformatica = new Sala("Sala de Informática",professorInformatica);
    protected Sala salaDeIngles = new Sala("Sala de Inglês",professorIngles);
    protected Sala salaDeAdministracao = new Sala("Sala de Admin.",professorAdmin);

    // Criacao dos cursos:
    protected Curso informatica = new Curso("Informática Básica", Turno.Manha,800.00);
    protected Curso ingles = new Curso("Inglês N1", Turno.Tarde, 700.00);
    protected Curso administracao = new Curso("Administração de Startups",Turno.Noite,850.00);

    public SysEscola(){

    }

    public void iniciaOperacao(){
        //Vamos simular o sistema da Direct School:
        //Primeiro vamos cadastrar alguns alunos
        alunos.add(new Aluno("Alice Costa Melo","613.840.689-37","AliceCostaMelo@teleworm.us","(87) 3568-7103",
                Sexo.Feminino,new Endereco("Rua Deósio Pereira Lins",1745,"Casa","Centro","56903-280","Serra Talhada",
                "PE")));

        alunos.add(new Aluno("Júlia Cardoso Oliveira","549.171.454-22","JuliaCardosoOliveira@armyspy.com","(11) 2497-5652",
                Sexo.Feminino,new Endereco("Rua Paulo de Melo Vieira",622,"Casa","Centro","07153-150","Guarulhos",
                "SP")));

        alunos.add(new Aluno("José Cardoso Melo","391.804.114-01","JoseCardosoMelo@armyspy.com","(11) 6686-6160",
                Sexo.Feminino,new Endereco("Rua Henrique Ongari",1887,"Casa","Centro","05037-150","São Paulo",
                "SP")));

        alunos.add(new Aluno("Rafaela Santos Ribeiro","584.005.770-35","RafaelaSantosRibeiro@dayrep.com","(19) 6830-9208",
                Sexo.Feminino,new Endereco("Rua João Cirino",613,"Casa","Centro","13067-180","Campinas",
                "SP")));

        alunos.add(new Aluno("Pedro Silva Alves","945.944.235-82","PedroSilvaAlves@dayrep.com","(41) 5470-5404",
                Sexo.Feminino,new Endereco("Rua Renato Wilczak",1886,"Ap 401","Centro","81900-650","Curitiba",
                "PR")));

        alunos.add(new Aluno("Lavinia Barbosa Barros","595.566.960-40","LaviniaBarbosaBarros@teleworm.us","(42) 6223-8661",
                Sexo.Feminino,new Endereco("Rua Conrado Kluber",364,"Ap 104","Centro","85055-030","Guarapuava",
                "PR")));

        alunos.add(new Aluno("Carlos Azevedo Santos","439.274.332-25","CarlosAzevedoSantos@dayrep.com","(62) 8796-3166",
                Sexo.Feminino,new Endereco("Praça Primeiro de Maio",445,"Ap 40","Centro","74967-770","Aparecida de Goiânia",
                "GO")));

        alunos.add(new Aluno("Manuela Cardoso Ribeiro","965.098.463-14","ManuelaCardosoRibeiro@jourrapide.com","(31) 9250-8975",
                Sexo.Nao_Binario,new Endereco("Beco Santo Agostinho",1951,"Casa 17","Centro","30440-280","Belo Horizonte",
                "MG")));

        alunos.add(new Aluno("Anna Dias Costa","547.556.477-97","AnnaDiasCosta@armyspy.com","(21) 3930-5994",
                Sexo.Feminino,new Endereco("Rua Amadeu João Penzin",770,"Ap 36","Centro","21520-620","Rio de Janeiro",
                "RJ")));

        alunos.add(new Aluno("Rafael Correia Almeida","595.566.960-40","LaviniaBarbosaBarros@teleworm.us","(42) 6223-8661",
                Sexo.Nao_Binario,new Endereco("Travessa Dezesseis",159,"Casa 7","Centro","23836-780","Itaguaí",
                "RJ")));

        // Vamos adicionar alunos às salas
        for (Aluno aluno : this.alunos) {
            int matriculaAux = 001;
            salaDeInformatica.adicionarAluno(aluno, matriculaAux + alunos.indexOf(aluno));
        }
        ;
        for (Aluno aluno : this.alunos) {
            salaDeIngles.adicionarAluno(aluno, aluno.getMatricula());
        };
        for (Aluno aluno : this.alunos) {
            salaDeAdministracao.adicionarAluno(aluno, aluno.getMatricula());
        };

        // Definição das salas aos respectivos cursos;
        informatica.setSala(salaDeInformatica);
        ingles.setSala(salaDeIngles);
        administracao.setSala(salaDeAdministracao);

        //Hora de exibir as informações:
        System.out.println("---------------------------------------------------------\n"+
                "\t\t\t\tRelatórios\n---------------------------------------------------------");
        System.out.println(informatica.toString());
        System.out.println(ingles.toString());
        System.out.println(administracao.toString());

        //Exibindo informações dos alunos no sistema - para exibir essas informações, comente as linhas 100-102 acima e descomente os blocos comentados com essa sintaxe: /* --- */:
        /* System.out.println("Alunos no Sistema:\n"+this.alunos.toString()); */

        //Exibindo informacoes dos professores:
        /* System.out.println("Professores no Sistema:\n"+professorInformatica.toString()+"\n"+professorIngles.toString()+"\n"+professorAdmin.toString()); */

        //Exibindo informações das Salas:
        /* System.out.println("Salas cadastradas:\n---------------------------------------------------------\n"+
        salaDeInformatica.getNomeSala().toString()+"\nQntd. Alunos: "+salaDeInformatica.getAlunos().size()+"\n"+"Professor: "+salaDeInformatica.getProfessor().getNome()+"\n---------------------------------------------------------\n"
        +salaDeIngles.getNomeSala().toString()+"\nQntd. Alunos: "+salaDeIngles.getAlunos().size()+"\n"+"Professor: "+salaDeIngles.getProfessor().getNome()+"\n---------------------------------------------------------\n"
        +salaDeAdministracao.getNomeSala().toString()+"\nQntd. Alunos: "+salaDeIngles.getAlunos().size()+"\nProfessor: "+salaDeAdministracao.getProfessor().getNome()+"\n---------------------------------------------------------"); */

        //Exibindo informações dos Cursos
        /* System.out.println("Cursos cadastrados:\n---------------------------------------------------------\n"+
        informatica.getNomeCurso()+"\nSala: "+informatica.getSala().getNomeSala()+"\nProfessor: "+informatica.getSala().getProfessor().getNome()+"\nValor da Mensalidade: R$"+informatica.getValorCurso()+"\nTurno: "+informatica.getTurnoCurso().toString()+
        "\n---------------------------------------------------------");
        System.out.println(ingles.getNomeCurso()+"\nSala: "+ingles.getSala().getNomeSala()+"\nProfessor: "+ingles.getSala().getProfessor().getNome()+"\nValor da Mensalidade: R$"+ingles.getValorCurso()+"\nTurno: "+ingles.getTurnoCurso().toString()+
        "\n---------------------------------------------------------");
        System.out.println(administracao.getNomeCurso()+"\nSala: "+administracao.getSala().getNomeSala()+"\nProfessor: "+administracao.getSala().getProfessor().getNome()+"\nValor da Mensalidade: R$"+administracao.getValorCurso()+"\nTurno: "+administracao.getTurnoCurso().toString()+
        "\n---------------------------------------------------------"); */
    }
}
