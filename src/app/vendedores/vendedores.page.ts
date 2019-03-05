import { Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/services/domain/vendedor.service';
import { VendedorViewDTO } from 'src/models/vendedor.view.dto';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.page.html',
  styleUrls: ['./vendedores.page.scss'],
})
export class VendedoresPage implements OnInit {

  items: VendedorViewDTO[];

  constructor(public vendedorService: VendedorService) { }

  ngOnInit() {
    // this.items = [
    //   {
    //     id: "1",
    //     nome: "Bosta do Peruca",
    //     cpf: "12345678912"
    //   },
    //   {
    //     id: "2",
    //     nome: "Bosta do Nandim",
    //     cpf: "12345678913"
    //   }
    // ]
    this.vendedorService.findAll()
      .subscribe(response => {
        this.items = response['content'];
      },
      error => {
        console.log(error);
      })
  }
}
