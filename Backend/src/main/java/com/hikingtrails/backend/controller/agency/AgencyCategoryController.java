package com.hikingtrails.backend.controller.agency;

import com.hikingtrails.backend.dto.CategoryDto;
import com.hikingtrails.backend.entity.Category;
import com.hikingtrails.backend.services.agency.category.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agency")
@RequiredArgsConstructor
public class AgencyCategoryController {



    private final CategoryService categoryService;

    /*down here we gonna write our POST category API*/
    /* @CrossOrigin(origins = "http://localhost:4200")*/
   /* @PostMapping("category")
    public ResponseEntity<Category> createCategory(@RequestBody CategoryDto categoryDto){
        Category category = categoryService.createcategory(categoryDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(category);
    }*/

    @GetMapping("")
    public ResponseEntity<List<Category>> getAllCategories(){
        return ResponseEntity.ok(categoryService.getAllCategories());
    }


}
