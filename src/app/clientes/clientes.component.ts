import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
@Input() nameCli: any;


  constructor() { }

  ngOnInit(): void {
  }

}
