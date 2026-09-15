public class Emp {

    Emp()
    {
        System.out.println("Constuctor called ths is default or null constructor");
    }
    void show()
    {
        System.out.println("This is normal method");
    }
    public static void main(String[] args) {
        Emp e1=new Emp();
        e1.show();
    }
}