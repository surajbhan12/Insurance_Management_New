package com.example;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class NewTest {
	WebDriver wd;
	
	// User Testing
  @Test
  public void userRegistration() {
	  wd.get("http://localhost:4200/");	
	  wd.findElement(By.name("userName")).sendKeys("Suraj");
	  wd.findElement(By.name("email")).sendKeys("Suraj@c.c");
	  wd.findElement(By.name("password")).sendKeys("12345");
	  wd.findElement(By.name("age")).sendKeys("24");
	  wd.findElement(By.name("phone")).sendKeys("8578937523",Keys.ENTER);
	  //wd.findElement(By.id("abc")).click();
	  wd.switchTo().alert().accept();
	  String text=wd.findElement(By.xpath("/html/body/app-root/app-user/main/section/div[2]/div/div[2]/div/div/h2")).getText();
	  System.out.println(text);
	  assertEquals(text,"User Login");
  }
  @Test
  public void userLoginsuccess()  {
	  wd.get("http://localhost:4200/user");	
	  wd.findElement(By.name("name")).sendKeys("Suraj");
	  wd.findElement(By.name("pwd")).sendKeys("12345",Keys.ENTER,Keys.ENTER);
	  //wd.switchTo().alert().accept();
	  
	  String text=wd.getCurrentUrl();
	  System.out.println(text);
	  assertEquals(text,"http://localhost:4200/user");
  }
  @Test
  public void userLoginfail() {
	  wd.get("http://localhost:4200/user");	
	  wd.findElement(By.name("name")).sendKeys("Suraj");
	  wd.findElement(By.name("pwd")).sendKeys("12",Keys.ENTER);
	  //wd.switchTo().alert().accept();
	  String text=wd.getCurrentUrl();
	  System.out.println(text);
	  assertEquals(text,"http://localhost:4200/user");
  }
  
  
  @Test
  public void userDashboard() {
	  wd.get("http://localhost:4200/userdashboard");	
	  String text=wd.findElement(By.xpath("//*[@id=\"navbarSupportedContent\"]/ul/li[1]/a")).getText();
	  assertEquals(text,"Home");
	  wd.get("http://localhost:4200/userdashboard");	
	  text=wd.findElement(By.xpath("//*[@id=\"navbarSupportedContent\"]/ul/li[2]/a")).getText();
	  assertEquals(text,"Policy");
	  wd.get("http://localhost:4200/userdashboard");	
	  wd.findElement(By.xpath("//*[@id=\"dropdownMenuButton1\"]")).click();
	  text=wd.findElement(By.xpath("//*[@id=\"navbarSupportedContent\"]/div[1]/div/div/li[1]/a")).getText();
	  assertEquals(text,"profile Update");
	  System.out.println("Dropdown works");
  }
 
	  @Test
	  public void userPasswordUpdate() throws InterruptedException {
		  wd.get(" http://localhost:4200/userpassword");	
		  wd.findElement(By.name("userName")).sendKeys("12345");
		  wd.findElement(By.name("password")).sendKeys("123",Keys.ENTER);
		  Thread.sleep(5000);
		  wd.switchTo().alert().accept();
		  String text=wd.getCurrentUrl();
		  System.out.println(text);
		  assertEquals(text,"http://localhost:4200/user");
	  }
	  @Test
	  public void profileupdate() {
		    wd.get("http://localhost:4200/updateuser");
		    wd.findElement(By.name("email")).sendKeys("Suraj@c.c");
		    wd.findElement(By.name("phone")).sendKeys("7892532");
		    wd.findElement(By.name("age")).sendKeys("25");
		    wd.findElement(By.xpath("/html/body/app-root/app-userupdate/section/div[2]/div/div[2]/div/div/form/div[4]/button")).click();
		    wd.switchTo().alert().accept();
		    String text = wd.getCurrentUrl();
		    assertEquals(text, "http://localhost:4200/userdashboard");
		}
	  
	@Test
	public void userQuery() throws InterruptedException {
		  wd.get("  http://localhost:4200/userquery");	
		  String text=wd.findElement(By.xpath("/html/body/app-root/app-userquery/div/div[2]/table/thead/tr/th[3]")).getText();
		  assertEquals(text,"Customer Name");
		  wd.findElement(By.xpath("/html/body/app-root/app-userquery/div/div[1]/nav/div/div/button[1]")).click();
		  Thread.sleep(5000);
		  //wd.switchTo().alert().accept();
		  text=wd.getCurrentUrl();
		  //System.out.println(text);
		  assertEquals(text,"http://localhost:4200/addquery");
	  }
	
	@Test
	public void history() {
	    wd.get("http://localhost:4200/userrecord");
	    String text = wd.findElement(By.xpath("/html/body/app-root/app-userrecord/div/div[2]/table/thead/tr/th[4]")).getText();
	    assertEquals(text, "Customer Name");
	}
	
	@Test
	public void logout() throws InterruptedException {
		wd.get("http://localhost:4200/addquery");
		wd.findElement(By.xpath("//*[@id=\"navbarSupportedContent\"]/div[2]/a")).click();
		 wd.switchTo().alert().accept();
		 Thread.sleep(5000);
		  //wd.switchTo().alert().accept();
		  String text=wd.getCurrentUrl();
		  //System.out.println(text);
		  assertEquals(text,"http://localhost:4200/user");
	}
	
	
	
	
	//Admin  	/Admin   	/Admin   	/Admin   	/Admin   	/Admin   	/Admin   	/Admin   	/Admin  	/Admin 
	
	
	@Test
	public void aminLoginsuccess()  {
		  wd.get("http://localhost:4200/admin");	
		  wd.findElement(By.name("name")).sendKeys("Manish");
		  wd.findElement(By.name("pwd")).sendKeys("12345",Keys.ENTER,Keys.ENTER);
		  //wd.switchTo().alert().accept();
		  
		  String text=wd.getCurrentUrl();
		  System.out.println(text);
		  assertEquals(text,"http://localhost:4200/admin");
	  }
	  @Test
	  public void adminLoginfail() {
		  wd.get("http://localhost:4200/admin");	
		  wd.findElement(By.name("name")).sendKeys("Suraj");
		  wd.findElement(By.name("pwd")).sendKeys("12",Keys.ENTER);
		  //wd.switchTo().alert().accept();
		  String text=wd.getCurrentUrl();
		  System.out.println(text);
		  assertEquals(text,"http://localhost:4200/admin");
	  }
	  
	  @Test
	  public void adminadduser() throws InterruptedException {
		    wd.get("http://localhost:4200/admindashboard");
		    wd.findElement(By.xpath("//*[@id=\"navbarSupportedContent\"]/ul/li[2]/a")).click();
		    wd.findElement(By.name("username")).sendKeys("Hanumann");
		    wd.findElement(By.name("email")).sendKeys("H@c.c");
		    wd.findElement(By.name("password")).sendKeys("2569");
		    wd.findElement(By.name("age")).sendKeys("26");
		    wd.findElement(By.name("phone")).sendKeys("3698547");
		   
		    wd.findElement(By.name("role")).sendKeys("user");
		    //wd.findElement(By.xpath("/html/body/app-root/app-adminregister/main/section/div[2]/div/div[2]/div/div/form/div[7]/button")).click();
		    Thread.sleep(3000);
		    String text = wd.getCurrentUrl();
		    assertEquals(text, "http://localhost:4200/admin/adminregister");
		}
	  
	  
	
	  
	 @Test
	public void adminAddPolicy() throws InterruptedException {
			  wd.get("http://localhost:4200/policy");	
			  wd.findElement(By.xpath("/html/body/app-root/app-policy/div/div[1]/nav/div/div/button[1]")).click();
			  //wd.switchTo().alert().accept();
			  Thread.sleep(3000);
			  String text=wd.getCurrentUrl();
			  System.out.println(text);
			  assertEquals(text,"http://localhost:4200/addpolicy");
	  }
	  
  
  @BeforeTest
  public void beforeTest() {
	  WebDriverManager.chromedriver().setup();
		wd=new ChromeDriver();
		wd.manage().window().maximize();

  }

  @AfterTest
  public void afterTest() {
	  
	  wd.quit();
  }
}
