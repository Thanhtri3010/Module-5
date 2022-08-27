package com.example.demo.service.impl;

import com.example.demo.model.MaBenhAn;
import com.example.demo.repository.IMaBenhAnRepository;
import com.example.demo.service.IMaBenhAnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaBenhAnService implements IMaBenhAnService {
    @Autowired
    private IMaBenhAnRepository benhAnRepository;

    @Override
    public List<MaBenhAn> findAllMaBenhAn() {
        return benhAnRepository.findAll();
    }
}
