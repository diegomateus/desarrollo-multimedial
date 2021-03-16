package co.edu.javeriana.desarrollomm;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;

class Taller {
    
    private final String fileName;
    private final String fileName2;
    private ArrayList<Integer> datos;
    private ArrayList<Integer> datos2;
    

    Taller(String filename, String filename2){
        this.fileName = filename;
        this.fileName2 = filename2;
        this.datos = new ArrayList<Integer>();
        this.datos2 = new ArrayList<Integer>();
    }

    void createTrashedFile() {
        try {
            File song1 = new File(fileName);
            FileInputStream file = new FileInputStream(song1);
            
            File song2 = new File(fileName2);
            FileInputStream file2 = new FileInputStream(song2);
            
            
            File exitSong = new File("salida.mp3");
            FileOutputStream exit = new FileOutputStream(exitSong);
            
            
            boolean eof = false;
            System.out.println("Creando archivo ...");
            while (!eof) {
                int input = file.read();
                if (input == -1)
                    eof = true;
                else 
                    datos.add(input);
            }
            
            eof = false;
            
            while (!eof) {
                int input = file2.read();
                if (input == -1)
                    eof = true;
                else
                    datos2.add(input);
            }
            
            for (int i = 0; i < datos.size()/2; i++)
				exit.write(datos.get(i));
            
            for (int i = datos2.size()/2; i < datos2.size(); i++)
				exit.write(datos2.get(i));
			
            
            file.close();
            file2.close();
            exit.close();
            System.out.println("Fin");
        } catch (Exception e) {
            System.out.println("Error -- " + e.toString());
        }
    }
}