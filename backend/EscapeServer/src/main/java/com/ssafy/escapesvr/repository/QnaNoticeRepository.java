package com.ssafy.escapesvr.repository;

import com.ssafy.escapesvr.entity.QnaNotice;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QnaNoticeRepository extends JpaRepository<QnaNotice, Long> {
    Page<QnaNotice> findByUserId(Integer userId, Pageable pageable);
}
