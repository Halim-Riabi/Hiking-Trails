package com.hikingtrails.backend.services.hiker.demand;

import com.hikingtrails.backend.dto.AddTrailInDemandDto;
import com.hikingtrails.backend.dto.BookDto;
import com.hikingtrails.backend.dto.DemandListDto;
import com.hikingtrails.backend.dto.PlaceBookDto;
import com.hikingtrails.backend.entity.Book;
import com.hikingtrails.backend.entity.DemandList;
import com.hikingtrails.backend.entity.Trail;
import com.hikingtrails.backend.entity.User;
import com.hikingtrails.backend.enums.BookStatus;
import com.hikingtrails.backend.repository.BookRepository;
import com.hikingtrails.backend.repository.DemandListRepository;
import com.hikingtrails.backend.repository.TrailRepository;
import com.hikingtrails.backend.repository.UserRepository;
import com.hikingtrails.backend.services.email.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

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

    @Autowired
    private EmailService emailService;

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
                demand.setNbParticipants(1L);
                demand.setUser(optionalUser.get());
                demand.setBook(activeBook);

                DemandList updatedDemand = demandListRepository.save(demand);

                activeBook.setTotalAmount(activeBook.getTotalAmount() + demand.getPrice());
                activeBook.setAmount(activeBook.getAmount() + demand.getPrice());
                activeBook.getDemandList().add(demand);
                bookRepository.save(activeBook);

                return ResponseEntity.status(HttpStatus.CREATED).body(demand.getId());

            }else{
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User or trail not found");
            }
        }

    }
    public BookDto getDemandByUserId(Long userId){
        Book activeBook = bookRepository.findByUserIdAndBookStatus(userId, BookStatus.Pending);
        List<DemandListDto> demandListDtoList = activeBook.getDemandList().stream().map(DemandList::getDemandDto).collect(Collectors.toList());
        BookDto bookDto = new BookDto();
        bookDto.setAmount(activeBook.getAmount());
        bookDto.setId(activeBook.getId());
        bookDto.setBookStatus(activeBook.getBookStatus());
        bookDto.setDiscount(activeBook.getDiscount());
        bookDto.setTotalAmount(activeBook.getTotalAmount());
        bookDto.setDemandList(demandListDtoList);
        return bookDto;
    }

    public BookDto increaseTrailNbparticipants(AddTrailInDemandDto addTrailInDemandDto){

        Book activeBook = bookRepository.findByUserIdAndBookStatus(addTrailInDemandDto.getUserId(), BookStatus.Pending);
        Optional<Trail> optionalTrail = trailRepository.findById(addTrailInDemandDto.getTrailId());

        Optional<DemandList> optionalDemandList = demandListRepository.findByTrailIdAndBookIdAndUserId(
                addTrailInDemandDto.getTrailId(), activeBook.getId(), addTrailInDemandDto.getUserId()
        );
        if(optionalTrail.isPresent() && optionalDemandList.isPresent()){
            DemandList demandList = optionalDemandList.get();
            Trail trail = optionalTrail.get();

            activeBook.setAmount(activeBook.getAmount() + trail.getPrice() );
            activeBook.setTotalAmount(activeBook.getTotalAmount() + trail.getPrice());

            demandList.setNbParticipants(demandList.getNbParticipants() + 1);

            demandListRepository.save(demandList);
            bookRepository.save(activeBook);
            return activeBook.getBookDto();
        }
        return null;
    }


    public BookDto decreaseTrailNbparticipants(AddTrailInDemandDto addTrailInDemandDto){

        Book activeBook = bookRepository.findByUserIdAndBookStatus(addTrailInDemandDto.getUserId(), BookStatus.Pending);
        Optional<Trail> optionalTrail = trailRepository.findById(addTrailInDemandDto.getTrailId());

        Optional<DemandList> optionalDemandList = demandListRepository.findByTrailIdAndBookIdAndUserId(
                addTrailInDemandDto.getTrailId(), activeBook.getId(), addTrailInDemandDto.getUserId()
        );
        if(optionalTrail.isPresent() && optionalDemandList.isPresent()){
            DemandList demandList = optionalDemandList.get();
            Trail trail = optionalTrail.get();

            activeBook.setAmount(activeBook.getAmount() - trail.getPrice() );
            activeBook.setTotalAmount(activeBook.getTotalAmount() - trail.getPrice());

            demandList.setNbParticipants(demandList.getNbParticipants() - 1);

            demandListRepository.save(demandList);
            bookRepository.save(activeBook);
            return activeBook.getBookDto();
        }
        return null;
    }

    public BookDto placeBook(PlaceBookDto placeBookDto){
        Book activeBook = bookRepository.findByUserIdAndBookStatus(placeBookDto.getUserId(), BookStatus.Pending);
        Optional<User> optionalUser = userRepository.findById(placeBookDto.getUserId());
        if(optionalUser.isPresent()){
            activeBook.setBookDescription(placeBookDto.getBookDescripton());
            activeBook.setAddress(placeBookDto.getAddress());
            activeBook.setDate(new Date());
            activeBook.setBookStatus(BookStatus.Placed);
            activeBook.setTrackingId(UUID.randomUUID());

            bookRepository.save(activeBook);

            Book book = new Book();
            book.setAmount(0L);
            book.setTotalAmount(0L);
            book.setDiscount(0L);
            book.setUser(optionalUser.get());
            book.setBookStatus(BookStatus.Pending);
            //when we will creating a new user one demand list will be automatically created for that particular user with the status of pending
            bookRepository.save(book);
            sendBookPlacedEmail(activeBook.getUser().getEmail(), activeBook.getUser().getName());
            return activeBook.getBookDto();
        }
        return null;

    }

    private void sendBookPlacedEmail(String email, String name) {
        /*String recipientEmail = book.getOwner().getEmail();*/
        String recipientEmail = "halimriabi001@gmail.com";
        String subject = "Book is placed successfully Notification";
        String text = "Dear " + name + ",\n\n"
                + "Your Book is placed " + "on your chosen trail" + " you will receive a notification from us after the admin admission "  + ".\n\n"
                + "Regards,\nHappy trails!\n" +
                "The Hiking Trail Team.";
        emailService.sendSimpleMessage(email, subject, text);
    }

    public List<BookDto> getMyPlacedBookings(Long userId){
        return bookRepository.findByUserIdAndBookStatusIn(userId, List.of(BookStatus.Placed, BookStatus.Refused,
                BookStatus.Accepted)).stream().map(Book::getBookDto).collect(Collectors.toList());
    }

}
