import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'array';
  titulo = "Bienvenidos a mi lista de Cursos";

  //cursos!:string[];
  cursos = ['JavaScript', 'C#', 'Otro curso'];

  addCurso(nombrec:String){
    this.cursos.push(String(nombrec));
  }

}
