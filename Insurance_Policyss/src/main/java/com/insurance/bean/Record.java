package com.insurance.bean;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.Type;

import lombok.Data;
@Entity
@Data
public class Record {
	
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private int recordno;
		private String policyname;
		private String category;
		private String customername;
		private String status;
		@Type(type="date")
		private Date date;
	
}
