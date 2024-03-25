package com.hikingtrails.backend.repository;

import com.hikingtrails.backend.entity.Trail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrailRepository extends JpaRepository<Trail, Long> {
}
