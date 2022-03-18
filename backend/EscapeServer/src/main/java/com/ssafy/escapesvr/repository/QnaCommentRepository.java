package com.ssafy.escapesvr.repository;


import com.ssafy.escapesvr.entity.QnaComment;
import com.ssafy.escapesvr.entity.QnaNotice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QnaCommentRepository extends JpaRepository<QnaComment, Long> {

    List<QnaComment> findByQnaNotice(QnaNotice qnaNotice);


}
