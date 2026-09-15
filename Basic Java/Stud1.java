import java.util.Scanner;
public class Stud1{
    int rno;
    String sname;
    float mark;
    Scanner scan=new Scanner(System.in);
    void getdata()
    {
        System.out.println("Enter rno sname and mark:");
        rno=scan.nextInt();
        sname=scan.next();
        mark=scan.nextFloat();
    }
    void dis()
    {
        System.out.println(rno+" "+sname+" "+mark);

    }
    public static  void main(String[] args)
    {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter total no.of students");
        int n=scan.nextInt();
        Stud1 s[]=new  Stud1[n];
        for(int i=0;i<n;i++)
            {
                s[i]=new Stud1();
                s[i].getdata();
            }
            for(int i=0;i<n;i++)
            {
                s[i].dis();
            }
            scan.close();
        
    }
}