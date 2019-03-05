import { Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/services/domain/vendedor.service';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.page.html',
  styleUrls: ['./vendedores.page.scss'],
})
export class VendedoresPage implements OnInit {

  constructor(public vendedorService: VendedorService) { }

  ngOnInit() {
    this.vendedorService.findAll()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      })
  }
}
