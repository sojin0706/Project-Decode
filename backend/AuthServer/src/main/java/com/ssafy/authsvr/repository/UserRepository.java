package com.ssafy.authsvr.repository;

import com.ssafy.authsvr.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByTokenId(String tokenId);

    User findUserById(Integer id);

    @Query("SELECT COUNT(u.id) FROM User u")
    Integer findAllByUserCount();
}