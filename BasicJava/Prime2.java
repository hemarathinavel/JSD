import java.util.Scanner;

public class Prime2 {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter n value");
        int n=scan.nextInt();
        int cnt=0;
        for(int i=2;i<n/2;i++)
        {
            if(n%i==0)
            {
                cnt++;
                System.out.println(n+" is not a prime number because divide by "+i);
            }
        }
        if(cnt==0)
            System.out.println(n+" is prime number");
            scan.close();

    }
}
