import java.util.Scanner;

public class Leapyear {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        int year=2028;
        if (year%4==0) {
            System.out.println("Leap year");
            
        }
        else{
            System.out.println("Not a Leap year");
        }
        scan.close();

    }
    
}
