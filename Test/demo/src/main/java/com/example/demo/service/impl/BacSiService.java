package com.example.demo.service.impl;


import com.example.demo.model.BacSi;
import com.example.demo.repository.IBacSiRepository;
import com.example.demo.service.IBacSiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BacSiService implements IBacSiService {
    @Autowired
    private IBacSiRepository bacSiRepository;

    @Override
    public List<BacSi> findAllBacSi() {
        return bacSiRepository.findAll();
    }
}
