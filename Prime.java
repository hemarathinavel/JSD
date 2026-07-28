import java.util.Scanner;

public class Prime {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter a number:");
        int n=scan.nextInt();
        int count=0;
        for(int i=1;i<=n;i++)
        {
            if(n%i==0)
                count++;
        }
        if (count==2) 
        {
            System.out.println(n+ "is prime number");
            
        } 
        else 
        {
            System.out.println(n+ "is not a prime number");
            
        }
        scan.close();
        
    }
    }
    

