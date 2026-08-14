import java.util.Scanner;
public class Count {
    public static void main(String[] args){
    Scanner scan=new Scanner(System.in);
    System.out.println("Enter Your Email:");
    String text=scan.next();
    int alphcnt=0;
    int numcnt=0;
    int dicnt=0;
    int len=text.length();
    for(int i=0;i<len;i++)
        {
        
        char c=text.charAt(i);
        if (c>='a' && c<='z') 
            alphcnt++;
        if(c>='0' && c<='9') 
             numcnt++;
        if(c=='.')
            dicnt++;
        if(c=='@')
                break;
        }
        System.out.println("Alphabets count:"+alphcnt);
        System.out.println("Numbers count:"+numcnt);
        System.out.println("Digit count:"+dicnt);
        scan.close();
    }
        
    

}
    
 

