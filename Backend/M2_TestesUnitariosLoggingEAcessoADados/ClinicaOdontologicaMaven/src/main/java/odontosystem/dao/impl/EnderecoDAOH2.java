package odontosystem.dao.impl;

import odontosystem.configuracao.ConfiguracaoJDBC;
import odontosystem.dao.IDao;
import odontosystem.model.Endereco;
import odontosystem.model.Paciente;
import org.apache.log4j.Logger;

import javax.swing.plaf.nimbus.State;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class EnderecoDAOH2 implements IDao<Endereco> {

    private ConfiguracaoJDBC configuracaoJDBC;
    private static Logger log = Logger.getLogger(EnderecoDAOH2.class);

    public EnderecoDAOH2(){
        this.configuracaoJDBC = new ConfiguracaoJDBC();
    }

    @Override
    public Endereco cadastrar(Endereco endereco) {
        log.debug("Cadastrando novo endereço no banco: "+ endereco.toString());
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;

        String queryCadastrarEndereco = String.format("INSERT INTO clinica.enderecos " +
                "(rua, numero, cidade, estado) " +
                "VALUES ('%s','%s','%s','%s')",endereco.getRua(),endereco.getNumero(),endereco.getCidade(),
                endereco.getEstado());

        try {
            statement = connection.createStatement();
            statement.execute(queryCadastrarEndereco, Statement.RETURN_GENERATED_KEYS);
            ResultSet keys = statement.getGeneratedKeys();

            if (keys.next()){
                endereco.setId(keys.getInt("id_endereco"));
            }
            statement.close();
            connection.close();
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }
        return endereco;
    }

    @Override
    public Optional<Endereco> buscar(Integer id) {
        log.debug("Bucando o endereço pelo ID: "+id);
        Endereco endereco = null;

        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        String querySelectEndereco =
                String.format("SELECT * FROM clinica.enderecos WHERE ID_ENDERECO = '%d'",id);

        try {
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(querySelectEndereco);

            while (resultSet.next()){
                endereco = criarObjetoEndereco(resultSet);
            }

            statement.close();
            connection.close();
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }
        return endereco != null ? Optional.of(endereco) : Optional.empty();
    }

    @Override
    public List<Endereco> buscarTodos(){
        log.debug("Buscando todos os endereços cadastrados no banco...");
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        String querySelecionarTodos = "SELECT * FROM clinica.enderecos";
        List<Endereco> enderecos = new ArrayList<>();

        try {
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(querySelecionarTodos);
            while (resultSet.next()){
                enderecos.add(criarObjetoEndereco(resultSet));
            }
            statement.close();
            connection.close();
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }

        return enderecos;
    }

    @Override
    public void excluir(Integer id) {
        log.debug("Buscando endereço pelo ID "+id+" para exclusão...");
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        String queryDeleteEndereco =
                String.format("DELETE FROM clinica.enderecos WHERE id_endereco ='%d'",id);
        String querySelectEndereco =
                String.format("SELECT * FROM clinica.enderecos WHERE id_endereco ='%d'",id);
        Endereco endereco = null;

        try {
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(querySelectEndereco);

            while (resultSet.next()){
                endereco = criarObjetoEndereco(resultSet);
            }

            statement.executeUpdate(queryDeleteEndereco);
            log.debug("Excluindo o emdereço: "+endereco.toString());
            statement.close();
            connection.close();
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }
    }

    @Override
    public Endereco modificar(Integer id) {
        return null;
    }

    private Endereco criarObjetoEndereco(ResultSet resultSet) throws SQLException {
        Integer idEndereco = resultSet.getInt("id_endereco");
        String rua = resultSet.getString("rua");
        String numero = resultSet.getString("numero");
        String cidade = resultSet.getString("cidade");
        String estado = resultSet.getNString("estado");

        return new Endereco(idEndereco,rua,numero,cidade,estado);
    }
}
