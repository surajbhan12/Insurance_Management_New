package com.insurance.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
@Entity
@Data
public class Policy {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int policyno;
	private String policyname;
	private String category;
	private String premium;
	private String maturity;
}
