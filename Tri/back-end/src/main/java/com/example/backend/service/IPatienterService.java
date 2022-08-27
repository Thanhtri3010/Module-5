package com.example.backend.service;

import com.example.backend.model.Patienter;

import java.util.List;
import java.util.Optional;

public interface IPatienterService {
    List<Patienter> findAll();

    Optional<Patienter> findById(Integer id);

    void save(Patienter patienter);

    void update(Patienter patienter);
}
