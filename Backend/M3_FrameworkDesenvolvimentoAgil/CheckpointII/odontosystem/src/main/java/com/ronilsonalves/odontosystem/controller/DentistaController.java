package com.ronilsonalves.odontosystem.controller;

import com.ronilsonalves.odontosystem.model.Dentista;
import com.ronilsonalves.odontosystem.service.DentistaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/dentista")
public class DentistaController {

    private DentistaService dentistaService;

    @Autowired
    public DentistaController(DentistaService dentistaService){
        this.dentistaService = dentistaService;
    }

    //Cadastrar novo dentista
    @PostMapping
    private ResponseEntity<Dentista> cadastrarDentista(@RequestBody Dentista dentista) {
        return ResponseEntity.status(HttpStatus.CREATED).body(dentistaService.cadastrar(dentista));
    }

    //Listar todos os dentistas
    @GetMapping
    private ResponseEntity<List<Dentista>> listarTodos() {
        return ResponseEntity.ok(dentistaService.buscarTodos());
    }

    //Listar dentistas por ID
    @GetMapping("/{id}")
    private ResponseEntity<Dentista> buscarPorId(@PathVariable("id") Long id) {
        Optional<Dentista> dentistaData = dentistaService.buscar(id);

        return dentistaData.map(dentista -> new ResponseEntity<>(dentista, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    //Apagar dentista por ID
    @DeleteMapping("/{id}")
    private void deletePorID(@PathVariable("id") Long id){
        dentistaService.excluir(id);
    }

    //Atualizar dentista (necessário passar ID no JSON)
    @PutMapping()
    private ResponseEntity<Dentista> atualizarPaciente(@RequestBody Dentista dentista){
        Optional<Dentista> dentistaData = dentistaService.buscar(dentista.getId());

        return dentistaData.map(pacienteAtt -> new ResponseEntity<>(dentistaService.atualizar(dentista), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
