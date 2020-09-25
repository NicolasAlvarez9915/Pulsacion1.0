import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona: Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.persona  = new Persona();
  }

  CalcularPulsacion(){
    if(this.validarCampos()){
      this.persona.calcularPulsacion();
      document.getElementById("pulsacion").innerHTML= " "+this.persona.pulsacion.toString();
    }
  }

  Registrar(){
    if(document.getElementById("pulsacion").innerHTML === ""){
      alert("Primero debe calcular las pulsaciones")
    }else{
      this.personaService.post(this.persona);
    }
  }

  validarCampos() {
    if(this.persona.identificacion === undefined || this.persona.identificacion.trim() === ""){
      alert("Debe ingresar la identificacion");
    }else{
      if(this.persona.nombre === undefined || this.persona.nombre.trim() == ""){
        alert("Debe ingresar el nombre");
      }else{
        if(this.persona.sexo === undefined || this.persona.sexo == "Seleccione" ){
          alert("Debe seleccionar el sexo");
        }else{
          if(this.persona.edad === undefined || this.persona.edad === 0 || this.persona.edad.toString() === ""){
            alert("Debe ingresar la edad");
          }else{
            return true;
          }
        }
      }
    }
    return false;
  }
}
