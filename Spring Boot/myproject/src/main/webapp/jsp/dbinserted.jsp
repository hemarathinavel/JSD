<%@page import="java.sql.*"%>
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
int rno=Integer.parseInt(request.getParameter("rno"));
String sname=request.getParameter("sname");
float mark=Float.parseFloat(request.getParameter("mark"));
String result="";
if(mark>=35)
	result="pass";
else
	result="fail";


out.println("<h2>Roll Number:"+rno+"</h2>");
out.println("<h2>Student name:"+sname+"</h2>");
out.println("<h2>Student Mark:"+mark+"</h2>");

try
{
	Class.forName("com.mysql.cj.jdbc.Driver");
	Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jsd","root","12345");
	Statement st=con.createStatement();
	int res=st.executeUpdate("insert into student values("+rno+",'"+sname+"',"+mark+",'"+result+"')");
	if(res>0)
		out.println("successfully inserted");
	else
		out.println("insertion error");
	st.close(); con.close();
	
}
catch(Exception e)
{
	out.println("Error :"+e.toString());
}
%>
</body>
</html>