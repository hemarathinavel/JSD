abstract class Test
{
    int cash;
    String property="cycle";
    void show1()
    {
        System.out.println("This is complete");
    }
    abstract void show2();
}
class Dclass extends Test
{
    void  show2()
    {
        cash=8900;
        cash--;
        System.out.println("Incomplete method"+cash);
    }
}
public  class Abstract {

    public static void main(String[] args)
    {
        Dclass d=new Dclass();
        d.show1();
        d.show2();
    }
}