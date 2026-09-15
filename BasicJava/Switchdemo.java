import java.util.Scanner;

public class Switchdemo {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        int k=1;
    switch (k) {
        case 1:
             System.out.println("one");
             break;
        case 2:
             System.out.println("two");
             break;
        case 3:
             System.out.println("three");
             break;
    
        default:
            System.out.println("Invalid number");
            break;
    }
    scan.close();

    }
}

