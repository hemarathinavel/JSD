import java.util.Scanner;
public class Removespace {
    public static void main(String[] args) {
    Scanner scan=new Scanner(System.in);
    System.out.println("Enter Your text:");
    String text=scan.nextLine();
    int len=text.length(); 
    String res="";
    for(int i=0;i<len;i++)
     {
        char c1=text.charAt(i);
        char c2=text.charAt(i);
        if (c1==' ' &&  c2==' ') 
            continue;
        else
            res=res+c1;

        }
        System.out.println(res+text.charAt(len-1));
        scan.close();
    }

     }






    
    

