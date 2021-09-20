package com.ronilsonalves.fabricadesoftware.entidades;

import com.ronilsonalves.fabricadesoftware.enums.Formacao;
import com.ronilsonalves.fabricadesoftware.enums.Sexo;

public class Professor extends Pessoa {
    double valorHoraAula;
    Formacao formacao;


    public Professor(String nome, String cpf, String email, String telefone, Sexo sexo, Endereco endereco,
                     double valorHoraAula, Formacao formacao) {
        super(nome, cpf, email, telefone, sexo, endereco);
        this.valorHoraAula = valorHoraAula;
        this.formacao = formacao;
    }

    public double getValorHoraAula() {
        return valorHoraAula;
    }

    public Formacao getFormacao() {
        return formacao;
    }

    @Override
    public String toString() {
        return "---------------------------------------------------------\nDados do Professor:\nNome: "+ this.getNome() + "\nCPF: " + this.getCpf() + "\nEmail: " + this.getEmail() +"\nTelefone" +
                ": " + this.getTelefone() + "\nValor Hora/Aula R$: " + this.getValorHoraAula() + "\nNível de " +
                "Formação: " + this.getFormacao() + "\n" + getEndereco().toString();
    }
}
