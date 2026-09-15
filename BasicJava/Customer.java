import java.util.Scanner;
class Customer
{
 public static void main(String args[])
 {
 Scanner scan=new Scanner(System.in);
 System.out.println("Enter the customer name:");
 String cname=scan.next();
 System.out.println("Enter customer id:");
 short cid=scan.nextShort();
 System.out.println("Enter the amount:");
 int amt=scan.nextInt();
 System.out.println("is account vaild y/n:");
 char av=scan.next().charAt(0);
 System.out.println("Enter the customer height:");
 float hei=scan.nextFloat();
 System.out.println("Enter the customer weight:");
 double wei=scan.nextDouble();
 System.out.println("Enter the  customer salary:");
 long sal=scan.nextLong();
 System.out.println("Enter the customer property:");
 byte pro=scan.nextByte();
 System.out.println("customer id:"+cid);
 System.out.println("customer name:"+cname);
 System.out.println("fees:"+amt);
 System.out.println("is account valid:"+av);
 System.out.println("customer height:"+hei);
 System.out.println("customer weight:"+wei);
 System.out.println("customer salary:"+sal);
 System.out.println("customer property:"+pro);
 scan.close();
}
}