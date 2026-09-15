class Grandfather
{
    void dis()
    {
        System.out.println("Grandfather Class");
    }
}
class Appa extends Grandfather

{
    int cash=50000;
   
    
}
class Son1 extends Appa
{
    void dis()
    {
        System.out.println("Son 1 access father cash"+cash);
    }
}
class Son2 extends Appa
{
    void dis()
    {
        System.out.println("Son 2 access father cash"+cash);
    }
}
public class Hierarchical
{
    public static void main(String[] args) {
        Son1 S1=new Son1();
        Son2 S2=new Son2();
        S1.dis();
        S2.dis();
    }
}