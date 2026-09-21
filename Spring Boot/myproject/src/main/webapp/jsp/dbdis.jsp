<%@page import="java.sql.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
try
{
	Class.forName("com.mysql.cj.jdbc.Driver");
	out.println("<h1>Driver Accepted</h1>");
	Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jsd","root","12345");
	out.println("<h2>Connection Success</h2>");
}
catch(Exception e)
{
	out.println("<h1>Error:"+e.toString()+"</h1>");
}

%>

</body>
</html>