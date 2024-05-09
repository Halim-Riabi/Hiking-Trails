package com.hikingtrails.backend.dto;

import com.hikingtrails.backend.entity.DemandList;
import com.hikingtrails.backend.entity.User;
import com.hikingtrails.backend.enums.BookStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
public class BookDto {

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

    //we will use this property to show the bookings to the admin
    private String userName;

    //down here the user can book many Trails, by changing the annotation to OneToOne he will only book one Trail

    private List<DemandListDto> demandList;

}
