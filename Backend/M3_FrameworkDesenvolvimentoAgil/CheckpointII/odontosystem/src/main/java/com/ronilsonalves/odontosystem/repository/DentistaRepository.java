package com.ronilsonalves.odontosystem.repository;

import com.ronilsonalves.odontosystem.model.Dentista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DentistaRepository extends JpaRepository<Dentista, Long> {
}
