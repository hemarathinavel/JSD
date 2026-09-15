import java.util.Scanner;
public class InputUser{
    public static void main(String[] args){
        Scanner scan=new Scanner(System.in);
        String meghana=scan.nextLine();
        if (meghana.equals("dead")) 
            {
                System.out.println("Surya meets Priya");
            }
        else{
            System.out.println("Surya marry meghana");
        }
        scan.close();


    }
    
    
}