import { Component, OnInit } from '@angular/core';
import { resolve } from 'chart.js/dist/helpers/helpers.options';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {
  public usuarios: any[] = [];
  public error: string = '';

  constructor() { }

  ngOnInit() {

    this.getUsuarios().then((usuarios: any) => {
      this.usuarios = usuarios;
    }).catch((error) => {
      this.error = error;
    });

    // const promesa = new Promise( ( resolve, reject ) => {

    //   if (false) {
    //     resolve( 'Hola Mundo' );
    //   }else {
    //     reject('Algo fallo')
    //   }
    // });

    // promesa.then( ( mensaje ) => {
    //   console.log( mensaje );
    // })
    // .catch(error => console.log('Error en mi promesa', error));

    // console.log('Fin del Init');
  }

  getUsuarios() {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => {
          if (body.data) {
            resolve(body.data);
          } else {
            reject('No se encontraron datos de usuarios');
          }
        })
        .catch(error => {
          reject('Hubo un error al obtener los usuarios');
        });
    });
  }
}
