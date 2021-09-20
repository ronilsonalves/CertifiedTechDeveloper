package com.ronilsonalves.fabricadesoftware.entidades;

public class Endereco {
    private String logradouro;
    private int numero;
    private String complemento;
    private String bairro;
    private String cep;
    private String cidade;
    private String estado;

    public Endereco(String logradouro, int numero, String complemento, String bairro, String cep, String cidade, String estado){
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cep = cep;
        this.cidade = cidade;
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "Endereço: \n" + logradouro +
                ", nº " + numero +
                ", " + complemento +
                ", " + bairro +
                ", CEP " + cep +
                ", " + cidade +
                " - " + estado;
    }
}
