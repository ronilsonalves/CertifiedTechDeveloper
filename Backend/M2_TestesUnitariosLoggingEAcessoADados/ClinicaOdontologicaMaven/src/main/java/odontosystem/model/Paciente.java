package odontosystem.model;

import java.sql.Date;

public class Paciente {
    private Integer id;
    private String nome;
    private String sobrenome;
    private String rg;
    private Date dataCadastro;
    private Integer idEndereco;
    private Endereco endereco;

    public Paciente(Integer id, String nome, String sobrenome, String rg, Date dataCadastro,
                    Endereco endereco) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.rg = rg;
        this.dataCadastro = dataCadastro;
        this.endereco = endereco;
    }

    //Construtor com ID do endereço do paciente
    public Paciente (Integer id, String nome, String sobrenome, String rg, Date dataCadastro, Integer idEndereco){
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.rg = rg;
        this.dataCadastro = dataCadastro;
        this.idEndereco = idEndereco;
    }

    // Construtor sem ID do paciente
    public Paciente(String nome, String sobrenome, String rg, Date dataCadastro,
                    Endereco endereco) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.rg = rg;
        this.dataCadastro = dataCadastro;
        this.endereco = endereco;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        sobrenome = sobrenome;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public Date getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Date dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    @Override
    public String toString() {
        return nome+" "+sobrenome+", RG: "+rg+", cadastrado em: "+dataCadastro+". Endereço: "+endereco.toString();
    }
}
