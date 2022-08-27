package com.example.backend.service.impl;

import com.example.backend.model.Patienter;
import com.example.backend.repository.IPatienterRepository;
import com.example.backend.service.IPatienterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatienterService implements IPatienterService {
    @Autowired
    private IPatienterRepository patienterRepository;

    @Override
    public List<Patienter> findAll() {
        return patienterRepository.findAll();
    }

    @Override
    public Optional<Patienter> findById(Integer id) {
        return patienterRepository.findById(id);
    }

    @Override
    public void save(Patienter patienter) {
        patienterRepository.save(patienter.getName());
    }

    @Override
    public void update(Patienter patienter) {
        patienterRepository.update(patienter.getName(), patienter.getId());
    }
}
