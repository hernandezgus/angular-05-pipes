import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  nombre = 'Capitán América';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('llegó la data');
    }, 2000);
  });
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: '500',
    direccion: {
      calle: 'primera 234',
      casa: 20
    }
  };
}
