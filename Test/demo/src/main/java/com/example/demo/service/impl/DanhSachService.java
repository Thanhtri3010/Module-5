package com.example.demo.service.impl;

import com.example.demo.model.DanhSach;
import com.example.demo.repository.IDanhSachRepository;
import com.example.demo.service.IDanhSachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DanhSachService implements IDanhSachService {
    @Autowired
    private IDanhSachRepository danhSachRepository;

    @Override
    public DanhSach save(DanhSach danhSach) {
        return danhSachRepository.save(danhSach);
    }

    @Override
    public Optional<DanhSach> findDanhSachById(int id) {
        return danhSachRepository.findById(id);
    }

    @Override
    public void deleteDanhSachById(int id) {
        danhSachRepository.deleteById(id);

    }

    @Override
    public Page<DanhSach> findAllDanhSach(Pageable pageable) {
        return danhSachRepository.findAll(pageable);

    }

    @Override
    public Page<DanhSach> findAllDanhSachByKeyword(String keyword, Pageable pageable) {
        return danhSachRepository.findAllDanhSachByKeyword("%" + keyword + "%", pageable);

    }
}
