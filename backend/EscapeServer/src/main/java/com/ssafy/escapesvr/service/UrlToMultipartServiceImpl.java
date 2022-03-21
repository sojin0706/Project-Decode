//package com.ssafy.escapesvr.service;
//
//import com.ssafy.escapesvr.entity.Theme;
//import com.ssafy.escapesvr.entity.ThemeReview;
//import com.ssafy.escapesvr.repository.ThemeRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.io.InputStream;
//import java.net.URL;
//import java.util.List;
//
//@Service
//public class UrlToMultipartServiceImpl implements UrlToMultipartService{
//
//    @Autowired
//    ThemeRepo themeRepo;
//
////    InputStream inputStream =   new URL(url).openStream();
////    File file = File.createTempFile("tmp", ".txt", new File(System.getProperty("user.dir")));
////    byte[] binary = IOUtils.toByteArray(inputStream);
////    FileUtils.writeByteArrayToFile(file, binary);
////    UploadedMultipartFile multipartFile = new UploadedMultipartFile(file, file.length(), "jpg",
////            "formParameter", fileName);
////    MultipartFileWrapper multipartFileWrapper = new MultipartFileWrapper();
////    multipartFileWrapper.setMultipartFile(multipartFile);
////    redirectAttributes.addFlashAttribute(multipartFileWrapper);
////    return "redirect:/member/uploadImage";
//
//
////    @Override
////    public void changeUrl() {
////        List<Theme> themeList=themeRepo.findAll();
////        for(Theme theme:themeList){
////            InputStream inputStream =   new URL(theme.getPosterUrl()).openStream();
////
////        }
////
////    }
////}
