package odontosystem.serviceTest;

import odontosystem.dao.impl.DentistaDAOH2;
import odontosystem.model.Dentista;
import odontosystem.service.DentistaService;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import java.util.List;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class DentistaServiceTest {

    private static DentistaService dentistaService = new DentistaService(new DentistaDAOH2());

    @BeforeClass
    public static void cadastrarDentista(){
        Dentista dentista1 = dentistaService.salvar(new Dentista(123,"Pedro","Camargo"));
        Dentista dentista2 = dentistaService.salvar(new Dentista(321,"Amanda","Pinheiro"));
        Dentista dentista3 = dentistaService.salvar(new Dentista(145,"Marina","Duarte"));
    }

    @Test
    public void salvarEBuscarTest() {
        Dentista dentista = dentistaService.salvar(new Dentista(159,"Bruna","Peixoto"));
        Assert.assertNotNull(dentistaService.buscar(dentista.getMatricula()));
    }

    @Test
    public void excluirTest() {
        dentistaService.excluir(123);
        Assert.assertTrue(dentistaService.buscar(123).isEmpty());
    }

    @Test
    public void buscarTodosTest() {
        List<Dentista> dentistas = dentistaService.buscarTodos();
        Assert.assertTrue(!dentistas.isEmpty());
        Assert.assertTrue(dentistas.size() >= 1);
        System.out.println("\nTotal de dentistas cadastrados:\n"+dentistas.size());
        dentistas.forEach(System.out::println);
    }

}
