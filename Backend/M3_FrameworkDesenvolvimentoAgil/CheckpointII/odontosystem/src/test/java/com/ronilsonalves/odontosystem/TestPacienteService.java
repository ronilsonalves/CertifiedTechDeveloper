package com.ronilsonalves.odontosystem;

import com.ronilsonalves.odontosystem.model.Endereco;
import com.ronilsonalves.odontosystem.model.Paciente;
import com.ronilsonalves.odontosystem.service.PacienteService;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.jupiter.api.BeforeAll;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class TestPacienteService {

    @Autowired
    private PacienteService pacienteService;

    @BeforeAll
    public void carregarDadosTest(){
        Paciente paciente = new Paciente("Paciente T1","PacienteT1","12345678",new Date(), new Endereco("Rua " +
                "PacienteT1","123","CidadeT1","ET"));
    }

    @Test
    public void cadastrarEBuscarTest(){
        Paciente paciente = new Paciente();
        paciente.setNome("Paciente T1");
        paciente.setSobrenome("PacienteT1");
        paciente.setRg("123456789");
        paciente.setDataCadastro(new Date());
        paciente.setEndereco(new Endereco("Rua PacienteT1","1234","CidadeT1","ET"));

        pacienteService.cadastrar(paciente);
        Assert.assertNotNull(pacienteService.buscar(paciente.getId()));
    }

    @Test
    public void atualizarPacienteTest(){
        Paciente paciente = new Paciente();
        paciente.setId(4L); // troque pelo ID que deseja atualizar, aqui tenho 11 pacientes, o primeiro (ID 4)
        // vou atualizar apenas o campo endereço
        paciente.setNome("Paciente T1");
        paciente.setSobrenome("PacienteT1");
        paciente.setRg("123456789");
        paciente.setDataCadastro(new Date());
        // Atualização de endereço
        paciente.setEndereco(new Endereco("Rua da Paz", "1001", "Cidade Nova", "Novo Estado"));

        pacienteService.atualizar(paciente);
        Assert.assertNotNull(pacienteService.buscar(paciente.getId()));
    }

    @Test
    public void excluirPacienteTest() {
        Long id = pacienteService.buscarTodos().get(0).getId();
        pacienteService.excluir(id);
        Assert.assertTrue(pacienteService.buscar(id).isEmpty());
    }

    @Test
    public void buscarTodosTest(){
        List<Paciente> pacientes = pacienteService.buscarTodos();
        Assert.assertTrue(!pacientes.isEmpty());
        Assert.assertTrue(pacientes.size() >= 0);
    }
}
