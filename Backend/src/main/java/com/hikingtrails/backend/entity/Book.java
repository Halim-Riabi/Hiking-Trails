package com.hikingtrails.backend.entity;

import com.hikingtrails.backend.dto.BookDto;
import com.hikingtrails.backend.enums.BookStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Table(name = "Trails_Booking")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String bookDescription;
    private Date date;
    //down here we will store the amount after applying the coupon code and discount
    private Long amount;
    private String address;

    private String payment;
    private BookStatus bookStatus;
    private Long totalAmount;
    private Long discount;
   //down here: generation of an automatic ID to track the demand of the booking on Visitor mode
    private UUID trackingId;
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    //down here the user can book many Trails, by changing the annotation to OneToOne he will only book one Trail
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "book")
    private List<DemandList> demandList;

    public BookDto getBookDto(){
        BookDto bookDto = new BookDto();

        bookDto.setId(id);
        bookDto.setBookDescription(bookDescription);
        bookDto.setAddress(address);
        bookDto.setTrackingId(trackingId);
        bookDto.setAmount(amount);
        bookDto.setDate(date);
        bookDto.setBookStatus(bookStatus);
        bookDto.setUserName(user.getName());
        return bookDto;

    }

}
