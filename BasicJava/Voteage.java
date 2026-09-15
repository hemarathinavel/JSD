import java.util.Scanner;

public class Voteage {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        int age=15;
       if (age>=18) {
        System.out.println("Vote is eligible");
       }
       else{
        System.out.println("Vote is not eligible");
       }
       scan.close();
    }
    
}
