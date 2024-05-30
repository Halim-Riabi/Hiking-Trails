package com.hikingtrails.backend.services.agency.agencyBook;

import com.hikingtrails.backend.dto.BookDto;
import com.hikingtrails.backend.entity.Book;
import com.hikingtrails.backend.enums.BookStatus;
import com.hikingtrails.backend.repository.BookRepository;
import com.hikingtrails.backend.services.admin.adminBook.AdminBookService;
import com.hikingtrails.backend.services.email.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AgencyBookServiceImpl implements AgencyBookService {

    private final BookRepository bookRepository;
    @Autowired
    private EmailService emailService;


    public List<BookDto> getAllPlacedBookings(){
        List<Book> bookList = bookRepository.
                findAllByBookStatusIn(List.of(BookStatus.Placed, BookStatus.Accepted, BookStatus.Refused));
        return bookList.stream().map(Book::getBookDto).collect(Collectors.toList());
    }

    public BookDto changeBookStatus(Long bookId, String status){
        Optional<Book> optionalBook = bookRepository.findById(bookId);
        if(optionalBook.isPresent()){
            Book book = optionalBook.get();

            if(Objects.equals(status, "Refused")){
                book.setBookStatus(BookStatus.Refused);
                sendStatusChangeEmail(book, "Refused");
            }else if(Objects.equals(status, "Accepted")){
                book.setBookStatus(BookStatus.Accepted);
                sendStatusChangeEmail(book, "Accepted");
            }
            return bookRepository.save(book).getBookDto();
        }
        return null;
    }


    private void sendStatusChangeEmail(Book book, String status) {
        String reecipientEmail = book.getUser().getEmail();
        String recipientEmail = "halimriabi001@gmail.com";
        String subject = "Book Status Changed Notification";
        String text = "Dear " + book.getUser().getName() + ",\n\n"
                + "The status of your booking " + "to the hiking trail which you have choose" + " has been changed to '" + status + "'.\n\n"
                + "Regards, \nHappy trails!\n" +
                "The Hiking Trail Team.";
        emailService.sendSimpleMessage(reecipientEmail, subject, text);
    }
}

