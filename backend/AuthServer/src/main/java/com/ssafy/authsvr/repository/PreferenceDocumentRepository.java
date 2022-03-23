package com.ssafy.authsvr.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PreferenceDocumentRepository extends MongoRepository<PreferenceDocumentRepository, ObjectId> {
}
