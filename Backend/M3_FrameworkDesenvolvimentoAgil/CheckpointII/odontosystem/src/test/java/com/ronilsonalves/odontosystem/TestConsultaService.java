package com.ronilsonalves.odontosystem;

import com.ronilsonalves.odontosystem.model.Consulta;
import com.ronilsonalves.odontosystem.model.Dentista;
import com.ronilsonalves.odontosystem.model.Endereco;
import com.ronilsonalves.odontosystem.model.Paciente;
import com.ronilsonalves.odontosystem.service.ConsultaService;
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
public class TestConsultaService {

    @Autowired
    private ConsultaService consultaService;
    @Autowired
    private PacienteService pacienteService;
    @Autowired
    private DentistaService dentistaService;

    @BeforeAll
    public void carregarDadosTest(){
        Consulta consulta = new Consulta(
                new Paciente("PacienteT1", "PraConsultaT1","123456",new Date(), new Endereco("Rua T1","123","TCity",
                        "TC")),
                new Dentista("DentistaT1","PraConsultaT1",2222), new Date()
        );
    }

    @Test
    public void cadastrarEBuscarConsultaTest(){
        Consulta consulta = new Consulta();
        consulta.setPaciente(new Paciente("PacienteT1", "PraConsultaT1","123456",new Date(), new Endereco("Rua T1","123","TCity",
                "TC")));
        consulta.setDentista(new Dentista("DentistaT1","PraConsultaT1",2222));
        consulta.setData(new Date());

        consultaService.cadastrar(consulta);
        Assert.assertNotNull(consultaService.buscar(consulta.getId()));
    }

    @Test
    public void atualizarConsultaTest(){
        Consulta consulta = new Consulta();
        consulta.setId(3L); //Aqui atualizando consulta de Id (3) com novos paciente e dentista, além de nova data.
        consulta.setPaciente(new Paciente("Ronilson", "Alves","12345678",new Date(), new Endereco("Rua 123","321",
                "Nova Cidade",
                "Novo Estado")));
        consulta.setDentista(new Dentista("Ana","Silva",8888));
        consulta.setData(new Date());

        consultaService.atualizar(consulta);
        Assert.assertNotNull(consultaService.buscar(consulta.getId()));
    }

    @Test
    public void excluirConsultaTest(){
        Long id = consultaService.buscarTodos().get(0).getId();
        consultaService.excluir(id);
        Assert.assertTrue(consultaService.buscar(id).isEmpty());
    }

    @Test
    public void buscarTodosTest() {
        List<Consulta> consultas = consultaService.buscarTodos();
        Assert.assertTrue(!consultas.isEmpty());
        Assert.assertTrue(consultas.size() >= 1);

    }
}