package com.example.demo.controller;

import com.example.demo.model.DanhSach;
import com.example.demo.service.IDanhSachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DanhSachController {
    @Autowired
    private IDanhSachService danhSachService;
    @GetMapping("/list")
    public ResponseEntity<Page<DanhSach>> findAll(@PageableDefault(value = 3) @RequestParam Optional<String> keyword,Pageable pageable){
        Page<DanhSach> list=danhSachService.findAllDanhSachByKeyword(keyword.orElse(""),pageable);
        if (list.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }
}
