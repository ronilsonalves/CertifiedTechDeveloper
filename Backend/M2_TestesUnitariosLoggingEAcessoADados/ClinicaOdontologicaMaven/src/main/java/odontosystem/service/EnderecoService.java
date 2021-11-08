package odontosystem.service;

import odontosystem.dao.IDao;
import odontosystem.model.Endereco;

import java.util.List;
import java.util.Optional;

public class EnderecoService {

    private IDao<Endereco> enderecoIDao;

    public EnderecoService(IDao<Endereco> enderecoIDao) {
        this.enderecoIDao = enderecoIDao;
    }

    public Endereco salvar (Endereco endereco){
        enderecoIDao.cadastrar(endereco);
        return endereco;
    }

    public Optional<Endereco> buscar (Integer id) {
        return  enderecoIDao.buscar(id);
    }

    public void excluir (Integer id) {
        enderecoIDao.excluir(id);
    }

    public List<Endereco> buscarTodos() {
        return enderecoIDao.buscarTodos();
    }
}
