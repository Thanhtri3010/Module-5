package com.example.backend.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Patienter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @OneToMany(mappedBy = "Patienter", cascade = CascadeType.ALL)
    private Set<Patient> patients;

    public Patienter() {
    }

    public Patienter(int id, String name, Set<Patient> patients) {
        this.id = id;
        this.name = name;
        this.patients = patients;
    }

    public Patienter(int parseInt) {
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

    public Set<Patient> getPatients() {
        return patients;
    }

    public void setPatients(Set<Patient> patients) {
        this.patients = patients;
    }
}
