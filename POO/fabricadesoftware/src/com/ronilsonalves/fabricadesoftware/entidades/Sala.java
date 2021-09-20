package com.ronilsonalves.fabricadesoftware.entidades;

import java.util.ArrayList;

public class Sala {
    private String nomeSala;
    private Professor professor;
    private ArrayList<Aluno> alunos = new ArrayList<Aluno>();
    private ArrayList<Integer> matriculas = new ArrayList<Integer>();

    public Sala(String nomeSala, Professor professor) {
        this.nomeSala = nomeSala;
        this.professor = professor;
    }

    public void adicionarAluno(Aluno aluno, int matricula) {
        aluno.setMatricula(matricula);
        this.alunos.add(aluno);
        this.matriculas.add(matricula);
    }

    public void removerAluno(String cpf){
        for (int i = 0; i < this.alunos.size(); i++){
            Aluno alunoPraRemover = this.alunos.get(i);
            if (alunoPraRemover.getCpf().equalsIgnoreCase(cpf)){
                this.alunos.remove(alunoPraRemover);
                this.matriculas.remove(alunoPraRemover.getMatricula());
            }
        }
    }

    public String getNomeSala() {
        return nomeSala;
    }

    public ArrayList<Aluno> getAlunos() {
        return alunos;
    }

    public Professor getProfessor() {
        return professor;
    }

    @Override
    public String toString() {
        for (int i = 0; i < this.alunos.size(); i++) {
            return "\n---------------------------------------------------------\nMatrícula\t| Nome do " +
                    "Aluno\n---------------------------------------------------------\n"
                    + alunos.get(i).getMatricula() + "\t\t\t " + alunos.get(i).getNome() + "\n"
                    + alunos.get(i+1).getMatricula() + "\t\t\t " + alunos.get(i+1).getNome() + "\n"
                    + alunos.get(i+2).getMatricula() + "\t\t\t " + alunos.get(i+2).getNome() + "\n"
                    + alunos.get(i+3).getMatricula() + "\t\t\t " + alunos.get(i+3).getNome() + "\n"
                    + alunos.get(i+4).getMatricula() + "\t\t\t " + alunos.get(i+4).getNome() + "\n"
                    + alunos.get(i+5).getMatricula() + "\t\t\t " + alunos.get(i+5).getNome() + "\n"
                    + alunos.get(i+6).getMatricula() + "\t\t\t " + alunos.get(i+6).getNome() + "\n"
                    + alunos.get(i+7).getMatricula() + "\t\t\t " + alunos.get(i+7).getNome() + "\n"
                    + alunos.get(i+8).getMatricula() + "\t\t\t " + alunos.get(i+8).getNome() + "\n"
                    + alunos.get(i+9).getMatricula() + "\t\t\t " + alunos.get(i+9).getNome() + "\n" +
                    "---------------------------------------------------------";
        }
        return "\n---------------------------------------------------------\nMatrícula\t| Nome do " +
                "Aluno\n---------------------------------------------------------\\n" +
                "********** NÃO HÁ ALUNOS MATRÍCULADOS NESTA SALA **********";
    }

}
