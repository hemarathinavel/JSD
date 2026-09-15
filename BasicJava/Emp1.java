public class Emp1 {

    int eno1;
    String ename;
    float esal;
    Emp1(int eno,String ename,float esal)
    {
        System.out.println("arg or parametarazied constructor");
        eno1=eno;
        this.ename=ename;
        this.esal=esal;
    }
    void show()
    {
        System.out.println("This is a normal method");
        System.out.println(eno1+" "+ename+" "+esal);
    }
    public static void main(String[] args) {
        Emp1 e1=new Emp1(1001,"Hema",80000.9f);
        Emp1 e2=new Emp1(1002,"Gokul",99000.8f);
        e1.show();
        e2.show();
        /*e1=e2;
        e1.show();
        e2.show();*/
        

    }
}