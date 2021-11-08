package odontosystem.serviceTest;

import odontosystem.dao.impl.EnderecoDAOH2;
import odontosystem.dao.impl.PacienteDAOH2;
import odontosystem.model.Endereco;
import odontosystem.model.Paciente;
import odontosystem.service.EnderecoService;
import odontosystem.service.PacienteService;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import java.sql.Date;
import java.util.List;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class PacienteServiceTest {

    private static PacienteService pacienteService = new PacienteService(new PacienteDAOH2(new EnderecoDAOH2()));
    private EnderecoService enderecoService = new EnderecoService(new EnderecoDAOH2());

    @BeforeClass
    public static void cadastrarPacientes(){
        Endereco endPaciente1 = new Endereco("Rua 1","123","Capinzal","MA");
        Paciente paciente1 = pacienteService.salvar((new Paciente("José","Silva","123456789",
                new Date(System.currentTimeMillis()),endPaciente1)));

        Endereco endPaciente2 = new Endereco("Rua 12","321","Belo Horizonte","MG");
        Paciente paciente2 = pacienteService.salvar((new Paciente("Julia","Mendes","987654321",
                new Date(System.currentTimeMillis()),endPaciente2)));
    }

    @Test
    public void salvarEBuscarTest() {
        Endereco endereco = new Endereco("Rua dos Perdidos","0101","Javaland","TI");
        Paciente paciente = pacienteService.salvar(new Paciente("Javanildo","Beans","234567890",
                new Date(System.currentTimeMillis()),endereco));

        Assert.assertNotNull(pacienteService.buscar(paciente.getId()));

    }

    @Test
    public void excluirTest() {
        pacienteService.excluir(2);
        Assert.assertTrue(pacienteService.buscar(2).isEmpty());
    }

    @Test
    public void buscarTodosTest() {
        List<Paciente> pacientes = pacienteService.buscarTodos();
        Assert.assertTrue(!pacientes.isEmpty());
        Assert.assertTrue(pacientes.size() >= 1);
        System.out.println("\nTotal de pacientes cadastrados:\n"+pacientes.size()+"\n");
        pacientes.forEach(System.out::println);
    }
}
