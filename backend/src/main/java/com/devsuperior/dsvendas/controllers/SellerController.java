package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.services.SellerService;

@Controller
@RequestMapping(value = "/sellers")
public class SellerController {
	
	@Autowired
	private SellerService sellerService;
	
	@GetMapping
	public ResponseEntity<List<SellerDTO>> findAll(){
		return ResponseEntity.ok().body(sellerService.findAll());
	}

}
