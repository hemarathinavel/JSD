import java.util.Scanner;

public class MarriageAge {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter a number:");
        int age=scan.nextInt();
        if (age >=21)
        {
            System.out.println("Eligble for marriage");
        } 
            else 
        {
            System.out.println("Not Eligble for marriage");
            
        }
        scan.close();

    }
    
}
