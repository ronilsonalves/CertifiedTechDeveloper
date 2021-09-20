package com.ronilsonalves.fabricadesoftware.entidades;

import com.ronilsonalves.fabricadesoftware.enums.Sexo;

public abstract class Pessoa {
    private String nome;
    private String cpf;
    private String email;
    private String telefone;
    private Sexo sexo;
    private Endereco endereco;

    public Pessoa(String nome,String cpf, String email, String telefone, Sexo sexo, Endereco endereco) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.sexo = sexo;
        this.endereco = endereco;
    }

    //Getters
    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }

    public String getEmail() {
        return email;
    }

    public String getTelefone() {
        return telefone;
    }

    public Sexo getSexo() {
        return sexo;
    }

    public Endereco getEndereco() {
        return endereco;
    }

}
