package com.example.demo.repository;

import com.example.demo.model.DanhSach;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IDanhSachRepository extends JpaRepository<DanhSach,Integer> {
    @Query(value = "select * from danh_sach where phuong_phap_dieu_tri like :keyword",
            nativeQuery = true,
            countQuery = "select * from danh_sach where phuong_phap_dieu_tri like :keyword")
    Page<DanhSach> findAllDanhSachByKeyword(@Param("keyword") String keyword, Pageable pageable);
}
