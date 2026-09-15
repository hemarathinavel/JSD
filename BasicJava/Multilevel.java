class Headmaster
{
    void show()
    {
        System.out.println("Headmaster class");
    }
}
class Teacher extends Headmaster
{
    void show()
    
    {
        super.show();
        System.out.println("Teacher class");
    }


}
class Student extends Teacher
{
    void show()
    {
        super.show();
        System.out.println("Student Class");
    }
}
public class  Multilevel
{
    public static void main(String[] args) {
        Student s=new  Student();
        s.show();
    }
}