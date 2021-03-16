package co.edu.javeriana.desarrollomm;


 
public class Principal {
 
  public static void main(String[] foo) {
	  LectorPixeles miLector = new LectorPixeles("art.gif",LectorPixeles.ARGB);
	  LectorPixeles miLector2 = new LectorPixeles("art.jpg",LectorPixeles.ARGB);
	  miLector.iniciarProceso();
	  System.out.println("---------Aca es la segunda imagen--------------");
	  miLector2.iniciarProceso();
  }
}