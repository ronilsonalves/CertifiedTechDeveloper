package com.ronilsonalves.odontosystem.repository;

import com.ronilsonalves.odontosystem.model.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepository extends JpaRepository<Paciente, Long> {
}
