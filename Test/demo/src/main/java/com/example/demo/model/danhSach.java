package com.example.demo.model;

import javax.persistence.*;

@Entity
public class DanhSach {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "idBenhAn", referencedColumnName = "id")
    private MaBenhAn maBenhAn;

    @ManyToOne
    @JoinColumn(name = "idBenhNhan", referencedColumnName = "id")
    private MaBenhNhan maBenhNhan;

    private String ngayNhapVien;
    private String ngayRaVien;
    private String lyDoNhapVien;
    private String phuongPhapDieuTri;

    @ManyToOne
    @JoinColumn(name = "idBacSi", referencedColumnName = "id")
    private BacSi bacSi;

    public DanhSach() {
    }

    public DanhSach(int id, MaBenhAn maBenhAn, MaBenhNhan maBenhNhan, String ngayNhapVien, String ngayRaVien, String lyDoNhapVien, String phuongPhapDieuTri, BacSi bacSi) {
        this.id = id;
        this.maBenhAn = maBenhAn;
        this.maBenhNhan = maBenhNhan;
        this.ngayNhapVien = ngayNhapVien;
        this.ngayRaVien = ngayRaVien;
        this.lyDoNhapVien = lyDoNhapVien;
        this.phuongPhapDieuTri = phuongPhapDieuTri;
        this.bacSi = bacSi;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public MaBenhAn getMaBenhAn() {
        return maBenhAn;
    }

    public void setMaBenhAn(MaBenhAn maBenhAn) {
        this.maBenhAn = maBenhAn;
    }

    public MaBenhNhan getMaBenhNhan() {
        return maBenhNhan;
    }

    public void setMaBenhNhan(MaBenhNhan maBenhNhan) {
        this.maBenhNhan = maBenhNhan;
    }

    public String getNgayNhapVien() {
        return ngayNhapVien;
    }

    public void setNgayNhapVien(String ngayNhapVien) {
        this.ngayNhapVien = ngayNhapVien;
    }

    public String getNgayRaVien() {
        return ngayRaVien;
    }

    public void setNgayRaVien(String ngayRaVien) {
        this.ngayRaVien = ngayRaVien;
    }

    public String getLyDoNhapVien() {
        return lyDoNhapVien;
    }

    public void setLyDoNhapVien(String lyDoNhapVien) {
        this.lyDoNhapVien = lyDoNhapVien;
    }

    public String getPhuongPhapDieuTri() {
        return phuongPhapDieuTri;
    }

    public void setPhuongPhapDieuTri(String phuongPhapDieuTri) {
        this.phuongPhapDieuTri = phuongPhapDieuTri;
    }

    public BacSi getBacSi() {
        return bacSi;
    }

    public void setBacSi(BacSi bacSi) {
        this.bacSi = bacSi;
    }
}
