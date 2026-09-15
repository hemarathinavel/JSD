class Logical
{
public static void main(String args[])
{ 
  int m1=100;
  int m2=100;
  int m3=100;
  int m4=100;
  int m5=34;
  boolean res=m1>34 && m2>34 && m3>34 && m4>34 && m5>34;
  System.out.println("Result :"+res);
  boolean res1=m1>34|| m2>34|| m3>34||m4>34||m5>34;
  System.out.println("Result :"+res1);  
  boolean res2=!(m1>34 && m2>34 && m3>34 && m4>34 && m5>34);
  System.out.println("Result :"+res2);
}
}