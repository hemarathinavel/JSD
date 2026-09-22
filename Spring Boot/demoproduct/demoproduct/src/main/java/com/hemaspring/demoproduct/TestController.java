package com.hemaspring.demoproduct;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class TestController {
	@GetMapping("/test")
	public String test() {
		return "<h1>Hello SpringBoot<h1>";
	}
	@GetMapping("/hema")
	public String addition()
	{
		int a=10;
		int b=20;
		return "<h2>Total :"+(a+b);
	}
}
