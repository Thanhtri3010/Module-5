package com.example.backend.service;

import com.example.backend.model.Patient;

import java.util.List;
import java.util.Optional;

public interface IPatientService {
    List<Patient> findAllPagination(Integer page);

    List<Patient> findAllNoPagination();

    List<Patient> search(String doctor, String name, String reason, String method, Integer page);

    Optional<Patient> findById(Integer id);

    void save(Patient patient);

    void update(Patient patient);

    void delete(Integer id);
}
