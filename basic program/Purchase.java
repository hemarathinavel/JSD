import java.util.Scanner;

public class Purchase {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter the price amount:");
        int price=scan.nextInt();
            if(price<=999)
             System.out.println("No discount");
            else if(price>=1000 && price<=1999)
             System.out.println(price*5/100);
            else if(price>=2000 && price<=3999)
             System.out.println(price*7/100);
            else if(price>=4000 && price<=5999)
             System.out.println(price*8/100);
            else
             System.out.println(price*8/100);
    }
    }

