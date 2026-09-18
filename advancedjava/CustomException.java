package advancedjava;
import java.util.Scanner;
class AgeException extends Exception
{
    Scanner scan=new Scanner(System.in);
    AgeException()
    {
    System.out.println("Enter Age:");
    int age=scan.nextInt();
    if(age>=18)
    {
        System.out.println("Age is accepted");
    }
    else{
        try
        {
            throw new Exception("Below 18 age is not accepted to vote");
        }
        catch(Exception e)
        {
            System.out.println(e.toString());
        }
        new  AgeException();
        
    }
}
}
public class CustomException {
    public static void main(String[] args) 
    {
        new AgeException();
    }

    
}
