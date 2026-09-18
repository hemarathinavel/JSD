package databasework;
import java.sql.*;
public class Pgrm1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("drive accepted");
		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jsd","root","12345");
		System.out.println("Connection Success");
		//---------------data retrive from mysql table name:student
		Statement st=con.createStatement();
		ResultSet rs=st.executeQuery("select * from student");
		while(rs.next())
		{
			System.out.println(rs.getString(1)+"        "+rs.getString(2)+"      "+rs.getString(3)+"       "+rs.getString(4));
			
		}
		rs.close();st.close();con.close();
	}
	catch(Exception e){
		System.out.println("Error Reason:"+e.toString());
	}

	}

}
