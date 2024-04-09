package com.hikingtrails.backend.services.admin.admintrail;

import com.hikingtrails.backend.dto.TrailDto;
import com.hikingtrails.backend.entity.Category;
import com.hikingtrails.backend.entity.Trail;
import com.hikingtrails.backend.repository.CategoryRepository;
import com.hikingtrails.backend.repository.TrailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminTrailServiceImpl implements AdminTrailService{

    private final TrailRepository trailRepository;
    private final CategoryRepository categoryRepository;

    public TrailDto addTrail(TrailDto trailDto) throws IOException {
        Trail trail = new Trail();
        trail.setName(trailDto.getName());
        trail.setDescription(trailDto.getDescription());
        trail.setPrice(trailDto.getPrice());
        trail.setImg(trailDto.getImg().getBytes());

        Category category = categoryRepository.findById(trailDto.getCategoryId()).orElseThrow();

        trail.setCategory(category);
        return trailRepository.save(trail).getDto();
    }

    /*Method of get All trails*/
    public List<TrailDto> getAllTrails(){
        List<Trail> trails = trailRepository.findAll();
        return trails.stream().map(Trail::getDto).collect(Collectors.toList());
    }

    public List<TrailDto> getAllTrailByName(String name){
        List<Trail> trails = trailRepository.findAllByNameContaining(name);
        return trails.stream().map(Trail::getDto).collect(Collectors.toList());
    }

    public boolean deleteTrail(Long id){
        Optional<Trail> optionalTrail = trailRepository.findById(id);
        if(optionalTrail.isPresent()){
            trailRepository.deleteById(id);
            return true;
        }
        return false;
    }

}
