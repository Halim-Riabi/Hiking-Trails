package com.hikingtrails.backend.services.admin.category;

import com.hikingtrails.backend.dto.CategoryDto;
import com.hikingtrails.backend.entity.Category;

import java.util.List;

public interface CategoryService {

    Category createcategory(CategoryDto categoryDto);
    List<Category> getAllCategories();
}
