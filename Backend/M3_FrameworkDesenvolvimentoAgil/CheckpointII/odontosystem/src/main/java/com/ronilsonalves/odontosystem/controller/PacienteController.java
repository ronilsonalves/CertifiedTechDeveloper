package com.ronilsonalves.odontosystem.controller;

import com.ronilsonalves.odontosystem.model.Paciente;
import com.ronilsonalves.odontosystem.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/paciente")
public class PacienteController {

    private PacienteService pacienteService;

    @Autowired
    public PacienteController(PacienteService pacienteService ) {
        this.pacienteService = pacienteService;
    }

    //Cadastrar novo paciente
    @PostMapping
    private ResponseEntity<Paciente> cadastrarPaciente(@RequestBody Paciente paciente) {
        return ResponseEntity.status(HttpStatus.CREATED).body(pacienteService.cadastrar(paciente));
    }

    //Listar todos os pacientes
    @GetMapping
    private ResponseEntity<List<Paciente>> listarTodos() {
        return ResponseEntity.ok(pacienteService.buscarTodos());
    }

    //Listar paciente por ID
    @GetMapping("/{id}")
    private ResponseEntity<Paciente> buscarPorId(@PathVariable("id") Long id) {
        Optional<Paciente> pacienteData = pacienteService.buscar(id);

        return pacienteData.map(paciente -> new ResponseEntity<>(paciente, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    //Apagar paciente por ID
    @DeleteMapping("/{id}")
    private void deletePorId(@PathVariable("id") Long id){
        pacienteService.excluir(id);
    }

    //Atualizar paciente (necessário passar ID no JSON)
    @PutMapping()
    private ResponseEntity<Paciente> atualizarPaciente(@RequestBody Paciente paciente){
        Optional<Paciente> pacienteData = pacienteService.buscar(paciente.getId());

        return pacienteData.map(pacienteAtt -> new ResponseEntity<>(pacienteService.atualizar(paciente), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

}
