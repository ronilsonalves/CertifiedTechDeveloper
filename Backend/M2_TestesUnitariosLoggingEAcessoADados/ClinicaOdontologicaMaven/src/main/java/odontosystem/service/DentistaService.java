package odontosystem.service;

import odontosystem.dao.IDao;
import odontosystem.model.Dentista;

import java.util.List;
import java.util.Optional;

public class DentistaService {

    private IDao<Dentista> dentistaIDao;

    public DentistaService(IDao<Dentista> dentistaIDao) {
        this.dentistaIDao = dentistaIDao;
    }

    public Dentista salvar(Dentista dentista) {
        dentistaIDao.cadastrar(dentista);
        return dentista;
    }

    public Optional<Dentista> buscar (Integer matricula) {
        return dentistaIDao.buscar(matricula);
    }

    public List<Dentista> buscarTodos(){
        return dentistaIDao.buscarTodos();
    }

    public void excluir (Integer matricula) {
        dentistaIDao.excluir(matricula);
    }

}
