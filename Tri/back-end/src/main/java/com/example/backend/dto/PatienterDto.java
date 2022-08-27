package com.example.backend.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class PatienterDto {
    private Integer id;

    @NotBlank(message = "*Không được để trống!")
    @Pattern(regexp = "/^([A-Z][^A-Z0-9\\s]+)(\\s[A-Z][^A-Z0-9\\s]+)*$/", message = "*Tên không được chứa số!")
    private String name;

    public PatienterDto() {
    }

    public PatienterDto(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
