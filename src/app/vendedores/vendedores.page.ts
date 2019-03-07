import { Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/services/domain/vendedor.service';
import { VendedorViewDTO } from 'src/models/vendedor.view.dto';
import { Router, NavigationExtras } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.page.html',
  styleUrls: ['./vendedores.page.scss'],
})
export class VendedoresPage implements OnInit {

  items: VendedorViewDTO[];

  constructor(
    public vendedorService: VendedorService,
    public alertCtrl: AlertController,
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

  onCickEdit(item: VendedorViewDTO) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "id": item.id,
          "nome": item.nome
      }
    };
    this.router.navigate(["edita-vendedor"], navigationExtras);
  }

  onCickDelete(id: string) {

    this.confirmDelete(id);
  }

  async confirmDelete(id: string) {
    const alert = await this.alertCtrl.create({
      header: "Excluir vendedor",
      message: "Você tem certeza?",
      backdropDismiss: false,
      buttons: [
        {
          text: "Sim",
          handler: () => {
            this.vendedorService.delete(id)
              .subscribe(
                response => {
                  this.ionViewWillEnter();
                },
                error => {});
          }
        },
        {
          text: "Não",
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }
}
