package com.hikingtrails.backend.services.hiker;

import com.hikingtrails.backend.dto.TrailDetailDto;
import com.hikingtrails.backend.dto.TrailDto;
import com.hikingtrails.backend.entity.Review;
import com.hikingtrails.backend.entity.Trail;
import com.hikingtrails.backend.repository.ReviewRepository;
import com.hikingtrails.backend.repository.TrailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HikerTrailServiceImpl implements HikerTrailService{

    private final TrailRepository trailRepository;
    private final ReviewRepository reviewRepository;

    /*Method of get All trails*/
    public List<TrailDto> getAllTrails(){
        List<Trail> trails = trailRepository.findAll();
        return trails.stream().map(Trail::getDto).collect(Collectors.toList());
    }

    public List<TrailDto> searchTrailByTitle(String name){
        List<Trail> trails = trailRepository.findAllByNameContaining(name);
        return trails.stream().map(Trail::getDto).collect(Collectors.toList());
    }

    public TrailDetailDto getTrailDetailById(Long trailId){
        Optional<Trail> optionalTrail = trailRepository.findById(trailId);
        if(optionalTrail.isPresent()){
            List<Review> reviewsList = reviewRepository.findAllByTrailId(trailId);
            TrailDetailDto trailDetailDto = new TrailDetailDto();
            trailDetailDto.setTrailDto(optionalTrail.get().getDto());
            trailDetailDto.setReviewDtoList(reviewsList.stream().map(Review::getDto).collect(Collectors.toList()));

            return trailDetailDto;
        }
        return null;
    }
}
