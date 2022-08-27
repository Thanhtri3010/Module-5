package com.example.backend.service.impl;

import com.example.backend.model.Patient;
import com.example.backend.repository.IPatientRepository;
import com.example.backend.service.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService implements IPatientService {
    @Autowired
    private IPatientRepository patientRepository;

    @Override
    public List<Patient> findAllPagination(Integer page) {
        return patientRepository.findAllPagination(page);
    }

    @Override
    public List<Patient> findAllNoPagination() {
        return patientRepository.findAllNoPagination();
    }

    @Override
    public List<Patient> search(String doctor, String name, String reason, String method, Integer page) {
        return patientRepository.search(doctor, name, reason, method, page);
    }

    @Override
    public Optional<Patient> findById(Integer id) {
        return patientRepository.findById(id);
    }

    @Override
    public void save(Patient patient) {
        patientRepository.save(patient.getPatienter().getId(), patient.getDayIn(), patient.getDayOut(), patient.getReason(), patient.getMethod(), patient.getDoctor());
    }

    @Override
    public void update(Patient patient) {
        patientRepository.update(patient.getDayIn(), patient.getDayOut(), patient.getReason(), patient.getMethod(), patient.getDoctor(), patient.getId());
    }

    @Override
    public void delete(Integer id) {
        patientRepository.delete(id);
    }
}
