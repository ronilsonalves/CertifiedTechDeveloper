package com.ronilsonalves.odontosystem.service;

import com.ronilsonalves.odontosystem.model.Dentista;
import com.ronilsonalves.odontosystem.repository.DentistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DentistaService {

    private DentistaRepository dentistaRepository;

    @Autowired
    public DentistaService(DentistaRepository dentistaRepository) {
        this.dentistaRepository = dentistaRepository;
    }

    //Cadastrar
    public Dentista cadastrar(Dentista dentista) {
        return dentistaRepository.save(dentista);
    }

    //Buscar todos
    public List<Dentista> buscarTodos() {
        return dentistaRepository.findAll();
    }

    //Buscar por Id
    public Optional<Dentista> buscar(Long id) {
        return dentistaRepository.findById(id);
    }

    //Excluir por Id
    public void excluir(Long id) {
        dentistaRepository.deleteById(id);
    }

    //Atualizar paciente (por id)
    public Dentista atualizar(Dentista dentista) {
        return dentistaRepository.save(dentista);
    }
}
