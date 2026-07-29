import java.util.Scanner;
public class Indexchar {
       public static void main(String[] args){
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter Your name:");
        String name=scan.next();
        char  letter=scan.next().charAt(0);
        int len=name.length();
        int count=0;
        for(int i=0;i<len;i++){
            if(name.charAt(i)==letter){
                System.out.println(i);
                count++;
            }
        }
        if(count==0)
            System.out.println("not found");
        }
    }


