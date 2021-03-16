using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    public CharacterController controlador;
	public float velocidad;
	public float gravedad = 20;
	public float velRotacion = 80;
	
	Vector3 direccion;

    // Update is called once per frame
    void Update()
    {
		if(controlador.isGrounded){
			direccion = transform.forward * velocidad * Input.GetAxis("Vertical");
			transform.Rotate (0, velRotacion * Time.deltaTime * Input.GetAxis("Horizontal"), 0);
		}
        
		direccion.y = direccion.y - gravedad * Time.deltaTime;
		controlador.Move(direccion*Time.deltaTime);
    }
}
