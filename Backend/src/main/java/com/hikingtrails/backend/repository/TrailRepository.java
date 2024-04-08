package com.hikingtrails.backend.repository;

import com.hikingtrails.backend.entity.Trail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrailRepository extends JpaRepository<Trail, Long> {

    List<Trail> findAllByNameContaining(String title);
}
