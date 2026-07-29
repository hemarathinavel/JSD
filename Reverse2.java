import java.util.Scanner;

public class Reverse2 {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter Your Name:");
        String n=scan.next();
        int len=n.length();
        int dec=--len;
        for(int i=0;i<len/2+1;i++){
            System.out.println(n.charAt(i)+""+n.charAt(dec--));
        }
        scan.close();
    }
    
}
