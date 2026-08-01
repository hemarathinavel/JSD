import java.util.Scanner;

public class Fibboseries {
    public static void main(String[] args){ 
        Scanner scan =new Scanner(System.in);
        System.out.println("Enter n value:");
        int n= scan.nextInt();
        int f1=-1;
        int f2=1;
        int f3;
        for(int i=1;i<=n;i++){
            f3=f1+f2;   //f3=-1+1 1+0 0 1
            System.out.println(""+f3);
            f1=f2;// f1=1 0 1
            f2=f3;// f2=0 1 1
        }
        scan.close();
    }
}
