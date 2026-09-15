import java.util.Scanner;

public class Control {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter 5 marks:");
        int m1=scan.nextInt();
        int m2=scan.nextInt();
        int m3=scan.nextInt();
        int m4=scan.nextInt();
        int m5=scan.nextInt();
        String res="";
        if (m1>34 && m2>34 && m3>34 && m4>34 && m5>34)
            {
                res="pass";
            } 
        else 
            {
                res="fail";
            }
        int tot=m1+m2+m3+m4+m5;
        float avg=tot/5.0f;
        String gra="";
        if (res=="pass") 
            {
                if  (avg>=85)
                    gra="outstanding";
                else if(avg>=75)
                    gra="excellent";
                else if(avg>=65)
                    gra="good";
                else  if(avg>=55)
                    gra="fair";
                else
                    gra="statisfactory";
            }
            else
            {
                gra="No grade because fail";
            }
            System.out.println("Total mark:"+tot);
            System.out.println("Percentage:"+avg);
            System.out.println("Result:"+res);
            System.out.println("Grade:"+gra);

            scan.close();
                    
                
            
        }

        
        /*if (mark>49)
        {
         System.out.println("Result:Pass");
        }
        else
        {
            System.out.println("Result:Fail46l");
        }
        scan.close();/* */
    }

