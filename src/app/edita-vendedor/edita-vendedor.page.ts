import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendedorService } from 'src/services/domain/vendedor.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edita-vendedor',
  templateUrl: './edita-vendedor.page.html',
  styleUrls: ['./edita-vendedor.page.scss'],
})
export class EditaVendedorPage implements OnInit {

  formGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder, 
    public vendedorService: VendedorService,
    public alertCtrl: AlertController,
    private router: Router) {

    this.formGroup = this.formBuilder.group({
      id: ['', Validators.compose([Validators.required])],
      nome: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50)])]
    });
   }

  ngOnInit() {
    
  }

  // onSubmit() {
  //   this.vendedorService.update(this.formGroup.value)
  //     .subscribe(response => {
  //       this.showUpdateOk();
  //     },
  //     error => {});
  // }

  async showUpdateOk() {
    const alert = await this.alertCtrl.create({
      header: "Sucesso!",
      message: "Atualização efetuada com sucesso",
      backdropDismiss: false,
      buttons: [
        {
          text: "Ok",
          handler: () => {
            this.router.navigate(['/vendedores'])
          }
        }
      ]
    });
    await alert.present();
  }

}
