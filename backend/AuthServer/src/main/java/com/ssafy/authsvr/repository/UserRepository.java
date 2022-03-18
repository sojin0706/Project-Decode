package com.ssafy.authsvr.repository;

import com.ssafy.authsvr.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByTokenId(String tokenId);

    User findById(Integer id);
}