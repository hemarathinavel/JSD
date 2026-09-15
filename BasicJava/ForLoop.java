import java.util.Scanner;
public class ForLoop{
    public static void main(String[] args){
        Scanner scan =new Scanner(System.in);
        System.out.println("Enter N number:");
        int n=scan.nextInt();
        int s=0;
        for(int i=1;i<=n;i++){
            s=s+i;
            System.out.print(i+"+");
        }
        
        System.out.println("\b="+s);
        scan.close();  
    }
}