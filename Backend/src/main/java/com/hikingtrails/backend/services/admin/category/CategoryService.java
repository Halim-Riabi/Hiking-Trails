package com.hikingtrails.backend.services.admin.category;

import com.hikingtrails.backend.dto.CategoryDto;
import com.hikingtrails.backend.entity.Category;

public interface CategoryService {

    Category createcategory(CategoryDto categoryDto);
}
