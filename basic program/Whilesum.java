import java.util.Scanner;

public class Whilesum {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter n value");
        long n=scan.nextLong();
        long  evensum=0;
        long  oddsum=0;
        long evencount=0;
        long oddcount=0;
        long edis=0;
        long odis=0;
        while (n!=0) 
        {
            long rem=n%10;
            if (rem%2==0) {
                evensum=evensum+rem;
                evencount++;
                edis=edis*10+rem;
            }

            else 
            {
                oddsum=oddsum+rem;
                oddcount++;
                odis=odis*10+rem;
            }
            n=n/10;
            
         }
         System.out.println("Display the evennumber:"+edis);
         System.out.println("Display the oddnumber:"+odis);
         System.out.println("Evencount:"+evencount);
         System.out.println("Oddcount:"+oddcount);
         System.out.println("EvenSum:"+evensum);
         System.out.println("OddSum:"+oddsum);
        scan.close();
    }
}
