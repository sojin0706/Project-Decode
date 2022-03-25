package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.client.UserServiceClient;
import com.ssafy.escapesvr.dto.ArticleResponseDto;
import com.ssafy.escapesvr.dto.ProfileRequestDto;
import com.ssafy.escapesvr.dto.QnaNoticeRequestDto;
import com.ssafy.escapesvr.dto.QnaNoticeResponseDto;
import com.ssafy.escapesvr.entity.Article;
import com.ssafy.escapesvr.entity.QnaNotice;
import com.ssafy.escapesvr.repository.QnaNoticeRepository;
import feign.FeignException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class QnaNoticeServiceImpl implements QnaNoticeService{

    private final QnaNoticeRepository qnaNoticeRepository;

    private final UserServiceClient userServiceClient;

    //게시글 작성
    @Transactional
    @Override
    public void insertQnaNotice(QnaNoticeRequestDto qnaNoticeRequestDto) throws Exception {

        QnaNotice qnaNotice = new QnaNotice();
        qnaNotice.setId(qnaNoticeRequestDto.getId());
        qnaNotice.setTitle(qnaNoticeRequestDto.getTitle());
        qnaNotice.setContent(qnaNoticeRequestDto.getContent());
        qnaNotice.setIsNotice(qnaNoticeRequestDto.getIsNotice());
        qnaNotice.setIsSecret(qnaNoticeRequestDto.getIsSecret());
        qnaNotice.setCreatedAt(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime());
        qnaNotice.setUserId(qnaNoticeRequestDto.getUserId());

        try{
            ProfileRequestDto profileRequestDto = userServiceClient.userFindProfile(qnaNoticeRequestDto.getUserId());
            qnaNotice.setNickName(profileRequestDto.getNickName());
            qnaNotice.setUserImage(profileRequestDto.getImage());
        }catch (FeignException e){
            e.printStackTrace();
        }

        qnaNoticeRepository.save(qnaNotice);

    }

    //게시글 수정
    @Transactional
    @Override
    public void updateQnaNotice(QnaNoticeRequestDto qnaNoticeRequestDto) {

        QnaNotice qnaNotice = qnaNoticeRepository.getById(qnaNoticeRequestDto.getId());

        qnaNotice.setTitle(qnaNoticeRequestDto.getTitle());
        qnaNotice.setContent(qnaNoticeRequestDto.getContent());
        qnaNotice.setIsNotice(qnaNoticeRequestDto.getIsNotice());
        qnaNotice.setIsSecret(qnaNoticeRequestDto.getIsSecret());
        qnaNotice.setModifiedAt(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime());
        qnaNotice.setUserId(qnaNoticeRequestDto.getUserId());

        qnaNoticeRepository.save(qnaNotice);

    }

    //게시글 삭제
    @Transactional
    @Override
    public void deleteQnaNotice(Long qnaId) {
        qnaNoticeRepository.deleteById(qnaId);
    }



    //모든 게시글 조회
    @Override
    public Page<QnaNoticeResponseDto> getQnaNoticeList(Pageable pageable) {

        //공지글이 앞으로 오도록 내림차순 정렬. + 시간순 정렬.
        //Page<QnaNotice> qnaNotices = qnaNoticeRepository.findAll(Sort.by(Sort.Direction.DESC, "isNotice","createdAt"),pageable);
        Page<QnaNotice> qnaNotices = qnaNoticeRepository.findAll(pageable);
        Page<QnaNoticeResponseDto> qnaNotice = qnaNotices.map(o -> new QnaNoticeResponseDto(o.getId(),o.getTitle(), o.getContent(),  o.getIsSecret(), o.getIsNotice(), o.getCreatedAt(), o.getModifiedAt(),o.getUserId(), o.getNickName(), o.getUserImage()));

        return qnaNotice;

    }

    //회원 별 게시글 조회
    @Override
    public Page<QnaNoticeResponseDto> getMyQnaList(Integer userId, Pageable pageable) {


        Page<QnaNotice> myQnaNotices = qnaNoticeRepository.findByUserId(userId,pageable);

        Page<QnaNoticeResponseDto> myQnaNotice = myQnaNotices.map(o -> new QnaNoticeResponseDto(o.getId(),o.getTitle(), o.getContent(),  o.getIsSecret(), o.getIsNotice(), o.getCreatedAt(), o.getModifiedAt(),o.getUserId(), o.getNickName(), o.getUserImage()));

        return  myQnaNotice;
    }




}
