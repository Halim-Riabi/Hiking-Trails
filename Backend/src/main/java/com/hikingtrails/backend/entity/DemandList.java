package com.hikingtrails.backend.entity;

import com.hikingtrails.backend.dto.DemandListDto;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Data
public class DemandList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long price;
    private Long nbParticipants;
    private Long quantity;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "trail_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Trail trail;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id")
    private Book book;

    public DemandListDto getDemandDto(){
        DemandListDto demandListDto = new DemandListDto();
        demandListDto.setId(id);
        demandListDto.setPrice(price);
        demandListDto.setTrailId(trail.getId());
        demandListDto.setQuantity(quantity);
        demandListDto.setNbParticipants(nbParticipants);
        demandListDto.setUserId(user.getId());
        demandListDto.setTrailName(trail.getName());
        demandListDto.setReturnedImg(trail.getImg());

        return demandListDto;
    }
}
