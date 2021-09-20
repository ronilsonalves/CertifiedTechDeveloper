package com.ronilsonalves.fabricadesoftware.entidades;

import com.ronilsonalves.fabricadesoftware.enums.Turno;

public class Curso {
    private String nome;
    private Turno turno;
    private double valor;
    private Sala sala;

    public Curso(String nome, Turno turno, double valor) {
        this.nome = nome;
        this.turno = turno;
        this.valor = valor;
    }

    public void setSala(Sala sala){
        this.sala = sala;
    }

    public String getNomeCurso() {
        return this.nome;
    }

    public Turno getTurnoCurso() {
        return this.turno;
    }

    public double getValorCurso() {
        return this.valor;
    }

    public Sala getSala() {
        return sala;
    }

    public String toString() {
        return "Dados do Curso\n---------------------------------------------------------\n"+"Nome: "+getNomeCurso()+"\nTurno: "+getTurnoCurso()+"\nValor R$: "+getValorCurso() +
                "\nSala: " +getSala().getNomeSala() + "\nProfessor(a): " +getSala().getProfessor().getNome()  + "\nAlunos " +
                "mátriculados:" +getSala().toString();
    }
}