import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-vendedor',
  templateUrl: './cadastro-vendedor.page.html',
  styleUrls: ['./cadastro-vendedor.page.scss'],
})
export class CadastroVendedorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("enviou o form");
  }

}
