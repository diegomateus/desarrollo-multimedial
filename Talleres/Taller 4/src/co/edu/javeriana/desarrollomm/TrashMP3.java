package co.edu.javeriana.desarrollomm;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

class TrashMP3 {
    private static final int INTERFERENCE = 250;
    private static final int RANDOM_BYTE = 45;
    private final String fileName;

    TrashMP3(String filename){
        this.fileName = filename;
    }

    void createTrashedFile() {
        try {
            File song = new File(fileName);
            FileInputStream file = new FileInputStream(song);
            File trashedSong = new File("salida.mp3");
            FileOutputStream trash = new FileOutputStream(trashedSong);
            boolean eof = false;
            int count = 0;
            
            System.out.println("Creando archivo ...");
            
            while (!eof) {
                int input = file.read();
                System.out.println(input);
                if (input == -1)
                    eof = true;
                else {
                    count++;
                    if (count % INTERFERENCE == 0) {
                        int newInput = input + RANDOM_BYTE;
                        
                        if (newInput > 255)
                            newInput = newInput - 255;
                        
                        trash.write(newInput);
                    } else
                        trash.write(input);
                }
            }
            
            System.out.println(count);
            
            file.close();
            trash.close();
            System.out.println("Fin");
        } catch (Exception e) {
            System.out.println("Error -- " + e.toString());
        }
    }
}