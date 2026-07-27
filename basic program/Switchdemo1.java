import java.util.Scanner;

public class Switchdemo1{
    public static void main(String args[]){
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter two numbers:");
        int a=scan.nextInt();
        int b=scan.nextInt();
        System.out.println("1.add 2.sub 3.mul 4.div 5. remainder Enter Your choice:");
        int ch=scan.nextInt();
        switch(ch)
        {
            case 1:
                System.out.println("addition:"+(a+b));
                break;
            case 2:
                System.out.println("subtraction:"+(a-b));
                break;
            case 3:
                System.out.println("multiplication:"+(a*b));
                break;
            case 4:
                System.out.println("division:"+(a/b));
                break;
            case 5:
                System.out.println("remaider:"+(a%b));
                break;
            default:
                System.out.println("Enter correct choice:");
                break;
        }   
        scan.close();
    }
}