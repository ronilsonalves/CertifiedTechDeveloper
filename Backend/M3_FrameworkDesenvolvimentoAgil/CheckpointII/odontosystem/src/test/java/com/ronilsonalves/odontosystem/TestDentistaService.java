package com.ronilsonalves.odontosystem;

import com.ronilsonalves.odontosystem.model.Dentista;
import com.ronilsonalves.odontosystem.model.Endereco;
import com.ronilsonalves.odontosystem.model.Paciente;
import com.ronilsonalves.odontosystem.service.DentistaService;
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
public class TestDentistaService {

    @Autowired
    private DentistaService dentistaService;

    @BeforeAll
    public void carregarDadosTest(){
        Dentista dentista = new Dentista("Dentista T1","DTest1",123456);
    }

    @Test
    public void cadastrarEBuscarTest(){
        Dentista dentista = new Dentista();
        dentista.setNome("Paciente T1");
        dentista.setSobrenome("PacienteT1");
        dentista.setMatricula(12345678);

        dentistaService.cadastrar(dentista);
        Assert.assertNotNull(dentistaService.buscar(dentista.getId()));
    }

    @Test
    public void atualizarDentistaTest(){
        Dentista dentista = new Dentista();
        dentista.setId(10L); // troque pelo ID que deseja atualizar, aqui tenho 10 dentistas, o último (ID 10)
        // cadastrado com dados errados.
        dentista.setNome("Dentista do PT1");
        dentista.setSobrenome("DentistaT1");
        dentista.setMatricula(3333);

        dentistaService.atualizar(dentista);
        Assert.assertNotNull(dentistaService.buscar(dentista.getId()));
    }

    @Test
    public void excluirPacienteTest() {
        Long id = dentistaService.buscarTodos().get(0).getId();
        dentistaService.excluir(id);
        Assert.assertTrue(dentistaService.buscar(id).isEmpty());
    }

    @Test
    public void buscarTodosTest(){
        List<Dentista> dentistas = dentistaService.buscarTodos();
        Assert.assertTrue(!dentistas.isEmpty());
        Assert.assertTrue(dentistas.size() >= 0);
    }
}
