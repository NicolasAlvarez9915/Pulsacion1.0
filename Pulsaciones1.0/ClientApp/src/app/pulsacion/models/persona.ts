export class Persona {
    identificacion: string;
    nombre: string;
    sexo: string;
    edad: number;
    pulsacion: number;

    calcularPulsacion(){
        if (this.sexo === "F")
    {
      this.pulsacion=(220 - this.edad) / 10;
    }
    else
    {
      this.pulsacion=(210 - this.edad) / 10;
    }

    }
}
