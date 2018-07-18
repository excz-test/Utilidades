import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../../services/ingreso.service';
import { Ingreso } from '../../models/ingreso';
import { NgForm } from '../../../../node_modules/@angular/forms';


@Component({
  selector: 'app-ingreso-add',
  templateUrl: './ingreso-add.component.html',
  styleUrls: ['./ingreso-add.component.css'],
})
export class IngresoAddComponent implements OnInit {

  ingreso: Ingreso = new Ingreso();
  var_money: string;
  condicionfijo: boolean;
  condicionrepetir: boolean;
  constructor(
    private _serviceIngreso: IngresoService) {
    }

  ngOnInit() {
    this.ingreso.fecha = new Date();
    this.var_money = 'dollar-sign';
    console.log(Date());
  }

  onSubmit(ingresoForm: NgForm) {
    this._serviceIngreso.addIngreso(ingresoForm.value)
      .subscribe();
  }
  alternativa() {
    if (!this.condicionfijo) {
      this.condicionrepetir = false;
    } else if (!this.condicionrepetir) {
      this.condicionfijo = false;
    }
  }

  

}
