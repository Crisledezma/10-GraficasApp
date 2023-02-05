import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  obteniendo: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  getUsuariosRedes() {
    return this.http.get('http://localhost:3000/grafica');
  }
  
  getDatosManipulados() {
    this.obteniendo = true;
    return this.getUsuariosRedes().pipe(
      delay(2500),
      map(data => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        this.obteniendo = false;
        return {labels, values}
      })
    )
  } 
}
