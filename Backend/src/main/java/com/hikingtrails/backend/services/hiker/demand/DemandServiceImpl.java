package com.hikingtrails.backend.services.hiker.demand;

import com.hikingtrails.backend.dto.AddTrailInDemandDto;
import com.hikingtrails.backend.entity.Book;
import com.hikingtrails.backend.entity.DemandList;
import com.hikingtrails.backend.entity.Trail;
import com.hikingtrails.backend.entity.User;
import com.hikingtrails.backend.enums.BookStatus;
import com.hikingtrails.backend.repository.BookRepository;
import com.hikingtrails.backend.repository.DemandListRepository;
import com.hikingtrails.backend.repository.TrailRepository;
import com.hikingtrails.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DemandServiceImpl implements DemandService{

    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DemandListRepository demandListRepository;

    @Autowired
    private TrailRepository trailRepository;

    public ResponseEntity<?> addTrailToDemand(AddTrailInDemandDto addTrailInDemandDto){
    //here in this method first of all we need to get the current active booking of our user
        Book activeBook = bookRepository.findByUserIdAndBookStatus(addTrailInDemandDto.getUserId(), BookStatus.Pending);
        Optional<DemandList> optionalDemandList = demandListRepository.findByTrailIdAndBookIdAndUserId
                (addTrailInDemandDto.getTrailId(), activeBook.getId(), addTrailInDemandDto.getUserId());

        if(optionalDemandList.isPresent()){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }else{
            Optional<Trail> optionalTrail = trailRepository.findById(addTrailInDemandDto.getTrailId());
            Optional<User> optionalUser = userRepository.findById(addTrailInDemandDto.getUserId());

            if(optionalTrail.isPresent() && optionalUser.isPresent()){
                //in this if condition we will create one new demand list
                DemandList demand = new DemandList();
                demand.setTrail(optionalTrail.get());
                demand.setPrice(optionalTrail.get().getPrice());
                demand.setQuantity(1L);
                demand.setUser(optionalUser.get());
                demand.setBook(activeBook);

                DemandList updatedDemand = demandListRepository.save(demand);

                activeBook.setTotalAmount(activeBook.getTotalAmount() + demand.getPrice());
                activeBook.setAmount(activeBook.getAmount() + demand.getPrice());
                activeBook.getDemandList().add(demand);
                bookRepository.save(activeBook);

                return ResponseEntity.status(HttpStatus.CREATED).body(demand);

            }else{
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User or trail not found");
            }
        }

    }

}
