package com.insurance.Repo;

import java.util.List;

import com.insurance.bean.Record;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RecordRepo extends JpaRepository<Record, Integer> {
	
	@Query("select record from Record record where record.customername=?1")
	public List<Record> findByCustomer(String name);
}
