package odontosystem.model;

public class Dentista {
    private Integer matricula;
    private String nome;
    private String sobrenome;

    public Dentista  (Integer matricula, String nome, String sobrenome){
        this.matricula = matricula;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    public Integer getMatricula() {
        return matricula;
    }

    public String getNome() {
        return nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setMatricula(Integer matricula) {
        this.matricula = matricula;
    }

    @Override
    public String toString(){
        return "Mátricula nº "+matricula+" - "+nome+" "+sobrenome;
    }
}
