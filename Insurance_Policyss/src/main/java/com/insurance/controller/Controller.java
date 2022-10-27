package com.insurance.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.insurance.Repo.PolicyRepo;
import com.insurance.Repo.QuestionRepo;
import com.insurance.Repo.RecordRepo;
import com.insurance.Repo.UserRepo;
import com.insurance.bean.Policy;
import com.insurance.bean.Questions;
import com.insurance.bean.Record;
import com.insurance.bean.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class Controller {
	@Autowired
	UserRepo repo;
	@Autowired
	PolicyRepo repo1; 
	@Autowired
	RecordRepo repo2;
	@Autowired
	QuestionRepo repo3;
	
	
	String customer;
	//user
	@PostMapping("/user/register")
	public String insert(@RequestBody User user) {
		user.setRole("user");
		repo.save(user);
		return "user inserted successfully";
	}
	@PostMapping("/admin/register")
	public String insertAdmin(@RequestBody User user) {
		repo.save(user);
		return "user inserted successfully";
	}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@RequestBody User user,HttpServletRequest request) {
		User u=repo.findByLogin(user.getUsername(), user.getPassword());
			if(u!=null && u.getRole().equals("user") ) {
				HttpSession session=request.getSession();
				session.setAttribute("username", user.getUsername());
				customer=user.getUsername();
				return "Hi "+user.getUsername();
				
			}
			else {
				return "wrong Credentials";
			}
	}
	
	@RequestMapping(value="/adminlogin", method=RequestMethod.POST)
	public String admin(@RequestBody User user,HttpServletRequest request) {
		User u=repo.findByLogin(user.getUsername(), user.getPassword());
			if(u!=null && u.getRole().equals("admin") ) {
				HttpSession session=request.getSession();
				session.setAttribute("username", user.getUsername());
				customer=user.getUsername();
				return "Hi "+user.getUsername();
			}
			else {
				return "wrong Credentials";
			}
	}
	
	@RequestMapping("/updateAdmin")
	public String adminUpdate(@RequestBody User user) {
		//User u=repo.findByuser(user.getUsername());
		User u=repo.findByuser(customer);
		u.setPassword(user.getPassword());
		repo.save(u);
		return "password updated";	
	}
	
	@RequestMapping("/updateUser")
	public String userUpdate(@RequestBody User user) {
		//User u=repo.findByuser(user.getUsername());
		User u=repo.findByuser(customer);
		u.setPassword(user.getPassword());
		repo.save(u);
		return "password updated";
	}
	
	@RequestMapping("/user/update")
	public String updateUser(@RequestBody User user) {
		//User u=repo.findByuser(user.getUsername());
		User u=repo.findByuser(customer);
		u.setEmail(user.getEmail());
		u.setPhone(user.getPhone());
		u.setAge(user.getAge());
		repo.save(u);
		return "password updated";
	}
	
	@DeleteMapping("/cancel/{user}")
	public String cancelRegistration(@PathVariable String user){
		User u=repo.findByuser(user);
		if(u!=null) {
		repo.deleteById(user);
		return "Username "+user+" gets deleted !";
		}
		else {
			return "Username not available";
		}
	}
	
	@RequestMapping(value="/logout", method=RequestMethod.POST)
	public void logout(HttpServletRequest request) {
		HttpSession session=request.getSession();
		session.invalidate();
	}
	
	
	
	
	//policy
	@PostMapping("/admin/addPolicy")
	public List<Policy> addPolicy(@RequestBody Policy policy){
		repo1.save(policy);
		return repo1.findAll();
	}
	@DeleteMapping("/admin/deletePolicy/{id}")
	public List<Policy> deletePolicy(@PathVariable Integer id) {
		repo1.deleteById(id);
		return repo1.findAll();		
	}
	@GetMapping("/policies")
	public List<Policy> getall(HttpServletRequest request){
		HttpSession session=request.getSession();
		return repo1.findAll();
	}
	
	//PolicyRecord
	@RequestMapping("/policyregister/{id}")
	public void registerPolicy(@PathVariable Integer id,HttpServletRequest request) {
		Record r=new Record();
		Policy p=new Policy();
		HttpSession session=request.getSession();
		r.setCustomername(customer);
		//r.setCustomername((String)session.getAttribute("username"));
		Optional<Policy> pol=repo1.findById(id);
		if(pol.isPresent()) {
			p=pol.get();
		 }
		r.setCategory(p.getCategory());
		r.setPolicyname(p.getPolicyname());
		Date date=new Date();
		r.setDate(date);
		r.setStatus("pending");
		repo2.save(r);
		
	}
	@GetMapping("/customer/record")
	public List<Record> customerRecord(HttpServletRequest request){
		HttpSession session=request.getSession();
		//String customer=(String)session.getAttribute("username");
		return repo2.findByCustomer(customer);
	}
	
	@RequestMapping("/approved/{id}")
	public List<Record> approvePolicy(@PathVariable String id){
		Record rec=new Record();
		 Optional<Record> r=repo2.findById(Integer.valueOf(id));
		 if(r.isPresent()) {
			rec=r.get();
		 }
		rec.setStatus("approved");
		repo2.save(rec);
		return repo2.findAll();
	}
	
	@RequestMapping("/disapproved/{id}")
	public List<Record> disapprovePolicy(@PathVariable String id){
		Record rec=new Record();
		 Optional<Record> r=repo2.findById(Integer.valueOf(id));
		 if(r.isPresent()) {
			rec=r.get();
		 }
		rec.setStatus("disapproved");
		repo2.save(rec);
		return repo2.findAll();
	}
	@GetMapping("/getrecord")
	public List<Record> getRecord(){
		return repo2.findAll();
	}
	
	//Question
	@PostMapping("/addQuestion")
	public void addQuestion(@RequestBody Questions question,HttpServletRequest request) {
		HttpSession session=request.getSession();
		//question.setCustomername((String)session.getAttribute("username"));
		question.setCustomername(customer);
		question.setAnswer("Not Answered");
		repo3.save(question);
	}
	@RequestMapping("/updateAnswer")
	public List<Questions> answerUpdate(@RequestBody Questions questions){
		Questions que=new Questions();
		Optional<Questions> q=repo3.findById(questions.getQid());
		if(q.isPresent()) {
			que=q.get();
		 }
		que.setAnswer(questions.getAnswer());
		repo3.save(que);
		return repo3.findAll();
	}
	@GetMapping("/getquestion")
	public List<Questions> getQuestions(){
		return repo3.findAll();
	}
	
}
