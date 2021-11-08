package odontosystem.dao.impl;

import odontosystem.configuracao.ConfiguracaoJDBC;
import odontosystem.dao.IDao;
import odontosystem.model.Endereco;
import odontosystem.model.Paciente;
import org.apache.log4j.Logger;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class PacienteDAOH2 implements IDao<Paciente> {

    private ConfiguracaoJDBC configuracaoJDBC;
    private EnderecoDAOH2 enderecoDAOH2;
    private static Logger log = Logger.getLogger(PacienteDAOH2.class);

    public PacienteDAOH2(EnderecoDAOH2 enderecoDAOH2) {
        this.configuracaoJDBC = new ConfiguracaoJDBC();
        this.enderecoDAOH2 = enderecoDAOH2;
    }

    @Override
    public Paciente cadastrar(Paciente paciente) {
        log.debug("Cadastrando novo paciente no banco: "+ paciente.toString());
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        paciente.setEndereco(enderecoDAOH2.cadastrar(paciente.getEndereco()));

        String queryCadastrarPaciente = String.format("INSERT INTO clinica.pacientes (nome, " +
                        "sobrenome, rg, " +
                        "data_cadastro, " +
                        "id_endereco) "+
                "VALUES ('%s','%s','%s','%tF','%d')",paciente.getNome(),paciente.getSobrenome(),paciente.getRg(),
                paciente.getDataCadastro(),paciente.getEndereco().getId());

        try {
            statement = connection.createStatement();
            statement.execute(queryCadastrarPaciente, Statement.RETURN_GENERATED_KEYS);
            ResultSet keys = statement.getGeneratedKeys();

            if (keys.next()){
                paciente.setId(keys.getInt(1));
                statement.close();
                connection.close();
            }
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }

        return paciente;
    }

    @Override
    public Optional<Paciente> buscar(Integer id) {
        log.debug("Buscando paciente pelo ID "+id);
        Paciente paciente = null;

        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        String querySelectPaciente =
                String.format("SELECT * FROM clinica.pacientes WHERE id_paciente ='%d'",id);

        try {
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(querySelectPaciente);

            while (resultSet.next()){
                paciente = criarObjetoPaciente(resultSet);
            }

            //paciente = new Paciente(resultSet.getInt(1), resultSet.getString("nome_paciente"),resultSet.getString(
            //        "sobrenome_paciente")
            //        , resultSet.getString("rg_paciente"), resultSet.getDate("datacadastro_paciente"),
            //        resultSet.getInt("id_endereco"));

            statement.close();
            connection.close();
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }
        return paciente != null ? Optional.of(paciente) : Optional.empty();
    }

    @Override
    public List<Paciente> buscarTodos() {
        log.debug("Buscando todos os pacientes cadastrados no banco...");
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        String querySelecionarTodos = "SELECT * FROM clinica.pacientes";
        List<Paciente> pacientes = new ArrayList<>();

        try {
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(querySelecionarTodos);
            while (resultSet.next()){
                pacientes.add(criarObjetoPaciente(resultSet));
            }
            statement.close();
            connection.close();
        }catch (SQLException throwables){
            throwables.printStackTrace();
        }
        return pacientes;
    }

    @Override
    public void excluir(Integer id) {
        log.debug("Buscando paciente com o ID: "+id+" para exclusão...");

        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        String queryDeletePaciente =
                String.format("DELETE FROM clinica.pacientes WHERE id_paciente ='%d'",id);
        String querySelectPaciente =
                String.format("SELECT * FROM clinica.pacientes WHERE id_paciente ='%d'",id);
        Paciente paciente = null;

        try {
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(querySelectPaciente);

            while (resultSet.next()){
                paciente = criarObjetoPaciente(resultSet);
            }
            //paciente = new Paciente(resultSet.getInt(1), resultSet.getString("nome_paciente"),resultSet.getString(
            //        "sobrenome_paciente")
            //        , resultSet.getString("rg_paciente"), resultSet.getDate("datacadastro_paciente"),
            //        resultSet.getInt("id_endereco"));

            statement.executeUpdate(queryDeletePaciente);
            log.debug("Excluindo o paciente: "+paciente.toString());
            statement.close();
            connection.close();
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }
    }

    @Override
    public Paciente modificar(Integer id) {
        return null;
    }

    private Paciente criarObjetoPaciente(ResultSet rs) throws SQLException {
        Integer idPaciente = rs.getInt("id_paciente");
        String nome = rs.getString("nome");
        String sobrenome = rs.getString("sobrenome");
        String rg = rs.getString("rg");
        Date dataCadastro = rs.getDate("data_cadastro");
        Endereco endereco = enderecoDAOH2.buscar(rs.getInt("id_endereco")).orElse(null);

        return new Paciente(idPaciente,nome,sobrenome,rg,dataCadastro,endereco);
    }
}
