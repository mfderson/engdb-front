import { Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/services/domain/vendedor.service';
import { VendedorViewDTO } from 'src/models/vendedor.view.dto';
import { Router, NavigationExtras } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.page.html',
  styleUrls: ['./vendedores.page.scss'],
})
export class VendedoresPage implements OnInit {

  items: VendedorViewDTO[];

  constructor(
    public vendedorService: VendedorService,
    private router: Router) { }

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

  showData(item: VendedorViewDTO) {
    console.log("Passou no openDetails: id = " + item.id + " nome = " + item.nome);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "id": item.id,
          "nome": item.nome
      }
    };
    this.router.navigate(["edita-vendedor"], navigationExtras);
  }

  // showData(id: string, nome: string, cpf: string) {
  //   console.log("Dados do item a ser editado: " + "id= " + id + " nome = " + nome);
  // }



  // onClickEdit(vendedor_id: string) {
  //   this.router.  navigate('EditaVendedorPage', {id: vendedor_id});
  // }
}
