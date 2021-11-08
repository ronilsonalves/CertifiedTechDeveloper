package odontosystem.configuracao;

import org.apache.log4j.Logger;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConfiguracaoJDBC {

    private String jdbcDriver;
    private String dbUrl;
    private String nomeUsuario;
    private String senhaUsuario;
    private static final Logger log = Logger.getLogger(ConfiguracaoJDBC.class);

    public ConfiguracaoJDBC(String jdbcDriver, String dbUrl, String nomeUsuario, String senhaUsuario) {


        this.jdbcDriver = jdbcDriver;
        this.dbUrl = dbUrl;
        this.nomeUsuario = nomeUsuario;
        this.senhaUsuario = senhaUsuario;
    }

    public ConfiguracaoJDBC() {
        this.jdbcDriver="org.h2.Driver";
        this.dbUrl="jdbc:h2:~/banco;DB_CLOSE_DELAY=-1;INIT=RUNSCRIPT FROM 'create.sql'"; // o script cria um banco
        // dentro do server h2 "banco"
        this.nomeUsuario = "sa";
        this.senhaUsuario = "";
        log.info("As crendenciais de conexão ao banco deste programa no ambiente de seu\n autor não requereram senha," +
                "caso seja necessário em seu ambiente, \nfavor fazer a modificação no arquivo de " +
                "configuração - de onde esse log está sendo lançado.");
    }

    public Connection conectarComBancoDeDados() {
        Connection connection = null;

        try {
            connection = DriverManager.getConnection(dbUrl,nomeUsuario,senhaUsuario);
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }

        return connection;
    }
}
