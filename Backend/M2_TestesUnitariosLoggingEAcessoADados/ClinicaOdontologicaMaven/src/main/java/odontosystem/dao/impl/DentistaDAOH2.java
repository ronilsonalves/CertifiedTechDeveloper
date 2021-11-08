package odontosystem.dao.impl;

import odontosystem.configuracao.ConfiguracaoJDBC;
import odontosystem.dao.IDao;
import odontosystem.model.Dentista;

import org.apache.log4j.Logger;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class DentistaDAOH2 implements IDao<Dentista> {

    private ConfiguracaoJDBC configuracaoJDBC;
    private static Logger log = Logger.getLogger(DentistaDAOH2.class);

    public DentistaDAOH2(){
        this.configuracaoJDBC = new ConfiguracaoJDBC();
    }

    @Override
    public Dentista modificar(Integer id) {
        return null; // future implements.
    }

    @Override
    public Dentista cadastrar(Dentista dentista){
        log.debug("Cadastrando novo dentista no banco: "+dentista.toString());
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;

        String queryCadastrarDentista = String.format("INSERT INTO clinica.dentistas (matricula, "+
                "nome, sobrenome) "+
                "VALUES ('%d','%s','%s')",dentista.getMatricula(),dentista.getNome(),dentista.getSobrenome());

        try {
            statement = connection.createStatement();
            statement.execute(queryCadastrarDentista);
            statement.close();
            connection.close();
            log.debug("O dentista "+dentista.getNome()+" foi cadastrado no banco!");
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }
        return dentista;
    }

    @Override
    public Optional<Dentista> buscar(Integer matricula){
        log.debug("Buscando dentista pela matrícula "+matricula+" ...");
        Dentista dentista = null;

        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        String querySelectDentista =
                String.format("SELECT * FROM clinica.dentistas WHERE matricula = '%d'",matricula);

        try {
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(querySelectDentista);

            while (resultSet.next()){
                dentista = criarObjetoDentista(resultSet);
            }

            statement.close();
            connection.close();
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }
        return dentista != null ? Optional.of(dentista) : Optional.empty();
    }

    @Override
    public List<Dentista> buscarTodos() {
        log.debug("Buscando todos os dentistas cadastrados no banco...");
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        String querySelectionarTodos = "SELECT * FROM clinica.dentistas";
        List<Dentista> dentistas = new ArrayList<>();

        try {
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(querySelectionarTodos);
            while (resultSet.next()){
                dentistas.add(criarObjetoDentista(resultSet));
            }
            statement.close();
            connection.close();
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }
        return dentistas;
    }

    @Override
    public void excluir(Integer matricula){
        log.debug("Bucando dentista com a matrícula de nº "+matricula+" para exclusão...");

        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        Dentista dentista = null;
        String queryDeleteDentista =
                String.format("DELETE FROM clinica.dentistas WHERE matricula = '%d'",matricula);
        String querySelectDentista =
                String.format("SELECT * FROM clinica.dentistas WHERE matricula = '%d'",matricula);

        try {
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(querySelectDentista);

            while (resultSet.next()){
                dentista = criarObjetoDentista(resultSet);
            }
            statement.executeUpdate(queryDeleteDentista);
            log.debug("Excluindo o dentista: "+dentista.toString());
            statement.close();
            connection.close();
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }
    }

    private Dentista criarObjetoDentista(ResultSet resultSet) throws SQLException {
        Integer matricula = resultSet.getInt("matricula");
        String nome = resultSet.getString("nome");
        String sobrenome = resultSet.getString("sobrenome");

        return new Dentista(matricula,nome,sobrenome);
    }
}
