package com.ronilsonalves.odontosystem.service;

import com.ronilsonalves.odontosystem.model.Consulta;
import com.ronilsonalves.odontosystem.repository.ConsultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConsultaService {

    private ConsultaRepository consultaRepository;

    @Autowired
    public ConsultaService(ConsultaRepository consultaRepository) {
        this.consultaRepository = consultaRepository;
    }

    //Cadastrar
    public Consulta cadastrar(Consulta consulta) {
        return consultaRepository.save(consulta);
    }

    //Buscar todos
    public List<Consulta> buscarTodos() {
        return consultaRepository.findAll();
    }

    //Buscar por Id
    public Optional<Consulta> buscar(Long id) {
        return consultaRepository.findById(id);
    }

    //Excluir por Id
    public void excluir(Long id) {
        consultaRepository.deleteById(id);
    }

    //Atualizar paciente (por id)
    public Consulta atualizar(Consulta consulta) {
        return consultaRepository.save(consulta);
    }
}
