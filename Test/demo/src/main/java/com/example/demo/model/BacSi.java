package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class BacSi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @OneToMany(mappedBy = "maBenhAn", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<DanhSach> danhSachSet;

    public BacSi() {
    }

    public BacSi(int id, String name, Set<DanhSach> danhSachSet) {
        this.id = id;
        this.name = name;
        this.danhSachSet = danhSachSet;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<DanhSach> getDanhSachSet() {
        return danhSachSet;
    }

    public void setDanhSachSet(Set<DanhSach> danhSachSet) {
        this.danhSachSet = danhSachSet;
    }
}
