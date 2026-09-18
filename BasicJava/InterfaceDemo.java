interface Parent1{
    int cash=100;
    void show1();
}
interface Parent2{
    String property="car";
    void show2();
}
public class InterfaceDemo implements  Parent1,Parent2{
    public static void main(String[] args)
    {
        InterfaceDemo ifd=new InterfaceDemo();
        ifd.show1();
        ifd.show2();

    }
    public  void show1()
    {
        System.out.println("this is interface override method:"+cash);
    }
    public void show2()
    {
        System.out.println("This is interface override method:"+property);
    }
}