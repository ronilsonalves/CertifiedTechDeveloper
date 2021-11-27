package com.ronilsonalves.odontosystem.controller;

import com.ronilsonalves.odontosystem.model.Consulta;
import com.ronilsonalves.odontosystem.service.ConsultaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/consulta")
public class ConsultaController {

    private ConsultaService consultaService;

    @Autowired
    public ConsultaController (ConsultaService consultaService) {
        this.consultaService = consultaService;
    }

    //Cadastrar nova consulta
    @PostMapping
    private ResponseEntity<Consulta> cadastrarPaciente(@RequestBody Consulta consulta) {
        return ResponseEntity.status(HttpStatus.CREATED).body(consultaService.cadastrar(consulta));
    }

    //Listar todos as consultas
    @GetMapping
    private ResponseEntity<List<Consulta>> listarTodos() {
        return ResponseEntity.ok(consultaService.buscarTodos());
    }

    //Listar consulta por ID
    @GetMapping("/{id}")
    private ResponseEntity<Consulta> buscarPorId(@PathVariable("id") Long id) {
        Optional<Consulta> consultaData = consultaService.buscar(id);

        return consultaData.map(consulta -> new ResponseEntity<>(consulta, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    //Apagar consulta por ID
    @DeleteMapping("/{id}")
    private void deletePorId(@PathVariable("id") Long id){
        consultaService.excluir(id);
    }

    //Atualizar consta (necessário passar ID no JSON)
    @PutMapping()
    private ResponseEntity<Consulta> atualizarPaciente(@RequestBody Consulta consulta){
        Optional<Consulta> consultaData = consultaService.buscar(consulta.getId());

        return consultaData.map(consultaAtt -> new ResponseEntity<>(consultaService.atualizar(consulta), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

}
