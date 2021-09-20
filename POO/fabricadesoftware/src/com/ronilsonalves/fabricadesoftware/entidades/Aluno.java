package com.ronilsonalves.fabricadesoftware.entidades;

import com.ronilsonalves.fabricadesoftware.enums.Sexo;

public class Aluno extends Pessoa {
    private int matricula;

    public Aluno(String nome, String cpf, String email, String telefone, Sexo sexo, Endereco endereco){
        super(nome, cpf, email, telefone, sexo, endereco);
        this.matricula = 000;
    }

    protected void setMatricula(int numMatricula) {
        this.matricula = numMatricula;
    }

    public int getMatricula() {
        return this.matricula;
    }

    @Override
    public String toString() {
        return  "Dados do Aluno:\nNome: "+ this.getNome() + "\nMatrícula: " + this.getMatricula() + "\nCPF: " + this.getCpf() + "\nEmail:" +
                " " + this.getEmail() +
                "\nTelefone: " + this.getTelefone() + "\nSexo: " + this.getSexo() +"\n" + getEndereco().toString();
    }

}
