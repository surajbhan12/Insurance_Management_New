package com.insurance.Repo;

import com.insurance.bean.Questions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QuestionRepo extends JpaRepository<Questions, Integer>{

}
