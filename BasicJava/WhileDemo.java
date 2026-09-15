import java.util.Scanner;
public class WhileDemo {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter N value:"); 
        long n=scan.nextLong();     //1234
        long r,s=0;
        while (n!=0)                // 1234 123 123 12 1 0
             {
                r=n%10;             //4  3  2  1
                n=n/10;             //123  12  1  0
                s=s+r;              //0+4  4+3 7+2  9+1
             }
             System.out.println("Sum of digits:"+s);
             scan.close();
            
    
    }
}
