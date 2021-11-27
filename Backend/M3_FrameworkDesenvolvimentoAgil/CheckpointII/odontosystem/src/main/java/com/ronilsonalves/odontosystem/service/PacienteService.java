package com.ronilsonalves.odontosystem.service;

import com.ronilsonalves.odontosystem.model.Paciente;
import com.ronilsonalves.odontosystem.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService {

    private PacienteRepository pacienteRepository;

    @Autowired
    public PacienteService(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    //Cadastrar
    public Paciente cadastrar(Paciente paciente) {
        return pacienteRepository.save(paciente);
    }

    //Buscar todos
    public List<Paciente> buscarTodos() {
        return pacienteRepository.findAll();
    }

    //Buscar por Id
    public Optional<Paciente> buscar(Long id) {
        return pacienteRepository.findById(id);
    }

    //Excluir por Id
    public void excluir(Long id) {
        pacienteRepository.deleteById(id);
    }

    //Atualizar paciente (por id)
    public Paciente atualizar(Paciente paciente) {
        return pacienteRepository.save(paciente);
    }
}
