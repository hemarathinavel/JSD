<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>Welcome to JSP</h1>
<%
	int i=1;
	String sname="Hemalatha.R";
	while(i<=100)
	{
		if(i%2==0)
			out.println("<br><font color='pink'>"+sname+" "+i+"</font>");
		else
			out.println("<br><font color='purple'>"+sname+" "+i+"</font>");
		i++;
			
	}
%>

</body>
</html>