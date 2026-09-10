import java.util.Scanner;
public class Letter{
    public static void main(String[] args)
    {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter the name:");
        String name=scan.nextLine();
        System.out.println("Enter character:");
        char ch=scan.next().charAt(0);
        boolean found=false;
        for(int i=0;i<name.length();i++){
            if(name.charAt(i)==ch){
                System.out.println("Index value:"+i);
                found=true;
                break;
            }
        }
        if(found==false){
            System.out.println("Not Found");
        }
    }

}
    

