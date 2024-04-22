package com.hikingtrails.backend.repository;

import com.hikingtrails.backend.entity.DemandList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DemandListRepository extends JpaRepository<DemandList, Long> {
    Optional<DemandList> findByTrailIdAndBookIdAndUserId(Long trailId, Long bookId, Long userId);

}
