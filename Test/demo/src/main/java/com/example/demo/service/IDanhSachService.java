package com.example.demo.service;

import com.example.demo.model.DanhSach;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IDanhSachService {

    DanhSach save(DanhSach danhSach);

    Optional<DanhSach> findDanhSachById(int id);

    void deleteDanhSachById(int id);

    Page<DanhSach> findAllDanhSach(Pageable pageable);

    Page<DanhSach> findAllDanhSachByKeyword(String keyword, Pageable pageable);
}
