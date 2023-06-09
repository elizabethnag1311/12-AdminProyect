import { Component, OnInit } from '@angular/core';
import { resolve } from 'chart.js/dist/helpers/helpers.options';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.getUsuarios().then( usuarios => {
      console.log(usuarios)
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

  getUsuarios(){
    return new Promise( resolve => {
    
    fetch('https://reqres.in/api/users')
    .then( resp => resp.json() )
    .then( body => console.log(body.data))
  });
}
}
