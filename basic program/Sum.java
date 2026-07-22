import java.util.Scanner;
class Sum
{
 public static void main(String args[])
{
 Scanner scan=new Scanner(System.in);
 System.out.println("Enter the ta:");
 int ta=scan.nextInt();
 System.out.println("Enter the en:");
 int en=scan.nextInt();
 System.out.println("Enter the ma:");
 int ma=scan.nextInt();
 System.out.println("Enter the sci:");
 int sci=scan.nextInt();
 System.out.println("Enter the soc:");
 int soc=scan.nextInt();
 int total=ta+en+ma+sci+soc;
 System.out.println("Enter the total:"+total);
 float avg=total/5.0f;
 System.out.println("Average:"+avg);
 scan.close();
}
}






 