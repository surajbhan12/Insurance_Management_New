package com.insurance.Repo;


import com.insurance.bean.Policy;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PolicyRepo extends JpaRepository<Policy, Integer>{
	@Query("select policy from Policy policy where policy.policyno=?1")
	public Policy findById(String name);
}
