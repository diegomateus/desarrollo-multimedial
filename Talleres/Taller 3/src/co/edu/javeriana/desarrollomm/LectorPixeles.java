package co.edu.javeriana.desarrollomm;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

public class LectorPixeles {
	public static final int RGB = 10;
	public static final int ARGB = 11;

	private int mModo;
	private BufferedImage mImagen;

	public LectorPixeles(String file, int modo) {
		try {
			mImagen = ImageIO.read(new File(file));
			mModo = modo;
		} catch (IOException e) {
			System.err.println(e.getMessage());
		}
	}
	public void iniciarProceso() {
		int ancho = mImagen.getWidth();
		int alto = mImagen.getHeight();
		System.out.println("ancho, alto: " + ancho + ", " + alto);
		for (int i = 0; i < alto; i++) {
			for (int j = 0; j < ancho; j++) {
				System.out.println("x,y: " + j + ", " + i);
				int pixel = mImagen.getRGB(j, i);
				imprimirARGB(pixel);
			}
		}
		mImagen.flush();
	}

	private void imprimirARGB(int pixel) {
		int alpha = 0;
		int rojo = (pixel >> 16) & 0xff;
		int verde = (pixel >> 8) & 0xff;
		int azul = (pixel) & 0xff;
		StringBuilder sbuilder = new StringBuilder();

		if (mModo == ARGB) {
			alpha = (pixel >> 24) & 0xff;

			sbuilder.append("alpha: ");
			sbuilder.append(alpha);
			sbuilder.append(", ");
		}

		sbuilder.append("rojo: ");
		sbuilder.append(rojo);
		sbuilder.append(", ");

		sbuilder.append("verde: ");
		sbuilder.append(verde);
		sbuilder.append(", ");

		sbuilder.append("azul: ");
		sbuilder.append(azul);
		sbuilder.append(".");

		System.out.println(sbuilder.toString());

	}

}
