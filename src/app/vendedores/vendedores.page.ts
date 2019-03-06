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
    // this.vendedorService.findAll()
    //   .subscribe(response => {
    //     this.items = response['content'];
    //   },
    //   error => { })
  }

  ionViewWillEnter() {
    this.vendedorService.findAll()
      .subscribe(response => {
        this.items = response['content'];
      },
      error => { })
  }
}
