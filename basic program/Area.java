//From the concept of Polymorphism ------>single name perform more than onr operations
public class Area{
Area(int a)
{
    System.out.println("Area of square:"+(a*a));
}
Area(int l,int b)
{
    System.out.println("Area of Reactangle:"+(l*b));
}
Area(float r)
{
    System.err.println("Area of Circle:"+(Math.PI*r*r));
}
public static void main(String[] args) {
    
    new Area(4);
    new Area(5,6);
    new Area(2.2f);
    
}
}