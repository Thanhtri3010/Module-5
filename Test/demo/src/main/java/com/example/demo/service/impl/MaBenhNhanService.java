package com.example.demo.service.impl;

import com.example.demo.model.MaBenhNhan;
import com.example.demo.repository.IMaBenhNhanRepository;
import com.example.demo.service.IMaBenhNhanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaBenhNhanService implements IMaBenhNhanService {
    @Autowired
    private IMaBenhNhanRepository maBenhNhanRepository;

    @Override
    public List<MaBenhNhan> findAllMaBenhNhan() {
        return maBenhNhanRepository.findAll();
    }
}
