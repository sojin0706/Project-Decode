package com.ssafy.escapesvr.repository;


import com.ssafy.escapesvr.entity.QnaComment;
import com.ssafy.escapesvr.entity.QnaNotice;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QnaCommentRepository extends JpaRepository<QnaComment, Long> {

    List<QnaComment> findByQnaNotice(QnaNotice qnaNotice);
    Page<QnaComment> findByUserIdOrderByCreatedAtDesc(Integer userId, Pageable pageable);
}
