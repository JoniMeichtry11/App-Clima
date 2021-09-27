import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {FormGroup, Validators,FormControl} from '@angular/forms'

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  constructor() { }
  @Output() searchValue: EventEmitter<string> = new EventEmitter(); //enviar data a app component
  searchForm = new FormGroup({
    search: new FormControl("",[Validators.pattern("[a-zA-Z]*")])//permitiremos unicamente letras
  });
  get f(){return this.searchForm.controls} //obtenemos los controles creados en el formulario reactivo

  getSearch(){
    this.searchValue.emit((this.searchForm.value).search); //enviara a app component el valor del input search y no un array
  }
  onEnter(evt:any){
    evt.preventDefault();//para que no refresque la pagina al presionar enter
    this.searchValue.emit(evt.target.value);
  }

  ngOnInit(): void {
  }

}
