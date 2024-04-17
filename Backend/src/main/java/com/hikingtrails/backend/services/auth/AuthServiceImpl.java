package com.hikingtrails.backend.services.auth;

import com.hikingtrails.backend.dto.SignupRequest;
import com.hikingtrails.backend.dto.UserDto;
import com.hikingtrails.backend.entity.Book;
import com.hikingtrails.backend.entity.User;
import com.hikingtrails.backend.enums.BookStatus;
import com.hikingtrails.backend.enums.UserRole;
import com.hikingtrails.backend.repository.BookRepository;
import com.hikingtrails.backend.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService{

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private BookRepository bookRepository;



    public UserDto createUser(SignupRequest signupRequest){
        User user = new User();

        user.setEmail(signupRequest.getEmail());
        user.setName(signupRequest.getName());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
        user.setRole(UserRole.HIKER);
        /*This is for saving into the db*/
        User createdUser =userRepository.save(user);

        Book book = new Book();
        book.setAmount(0L);
        book.setTotalAmount(0L);
        book.setDiscount(0L);
        book.setUser(createdUser);
        book.setBookStatus(BookStatus.Pending);
        //when we will creating a new user one demand list will be automatically created for that particular user with the status of pending
        bookRepository.save(book);

        UserDto userDto = new UserDto();
        userDto.setId(createdUser.getId());

        return userDto;
    }

    public Boolean hasUserWithEmail(String email){
        return userRepository.findFirstByEmail(email).isPresent();
    }
    @PostConstruct
    public void createAdminAccount(){
        User adminAccount = userRepository.findByRole(UserRole.ADMIN);
        if(null == adminAccount){
            User user =  new User();
            user.setEmail("admin@test.com");
            user.setName("admin");
            user.setRole(UserRole.ADMIN);
            user.setPassword(new BCryptPasswordEncoder().encode("admin"));
            userRepository.save(user);
        }

    }
}
