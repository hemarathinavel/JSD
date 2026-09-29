package com.hemaspring.demoproduct;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PeopleController {
	@GetMapping("/api")
	public String myMethod(Model model) {
		model.addAttribute("name","Hema");
		model.addAttribute("age",21);
		model.addAttribute("city","Karur");
		return"Index";
	}
	@GetMapping("/api/v3")
	public String itemMethod(Model model)
	{
		Person p1=new Person("Hema",21);
		Person p2=new Person("Gokul",5);
		Person p3=new Person("Selva",7);
		Person p4=new Person("Kavin",23);
		Person p5=new Person("Priya",21);
		List<Person> plist=Arrays.asList(p1,p2,p3,p4,p5);
		model.addAttribute("personlist",plist);
		
		return "myfile";
	}
	@GetMapping("/api/v4")
	public String jspMethod(Model model)
	{
		return "mypgrm";
	}
	@GetMapping("/api/v5")
	public String testAge(Model model)
	{
		int age=16;
		model.addAttribute("studage", age);
		return "age";
		}

}
