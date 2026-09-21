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
out.println("welcome");
int mark=100;
if(mark>34)
	out.println("<font size='7' color='green'>PASS</font>");
else
	out.println("<font size='7' color='red'>FAIL</font>");
for(int i=1;i<=100;i++)
{
	out.println(" "+i);
}
%>

</body>
</html>