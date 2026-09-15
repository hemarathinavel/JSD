import java.util.Scanner;
public class Student{
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
        System.out.println(rno+""+sname+""+mark);
    }
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter total no.of students");
        int n=scan.nextInt();
        Student s[]=new Student[n];
        for(int i=0;i<n;i++)
        {
            s[i]=new Student();
            s[i].getdata();
        }
        /*for(int i=0;i<n;i++)
        {
            s[i].dis();
        }*/
        //fail student list(mark<50)
        for(int i=0;i<n;i++)
        {
            if (s[i].mark<50)
                s[i].dis();
    }
    scan.close();
}
}