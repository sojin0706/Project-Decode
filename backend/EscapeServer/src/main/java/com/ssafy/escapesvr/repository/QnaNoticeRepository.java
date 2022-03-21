package com.ssafy.escapesvr.repository;

import com.ssafy.escapesvr.entity.QnaNotice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QnaNoticeRepository extends JpaRepository<QnaNotice, Long> {
    List<QnaNotice> findByUserId(Integer userId);
}
