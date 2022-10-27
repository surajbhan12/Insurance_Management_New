package com.insurance.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
@Entity
@Data
public class Questions {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int qid;
	public String question;
	public String answer;
	public String customername;
}
