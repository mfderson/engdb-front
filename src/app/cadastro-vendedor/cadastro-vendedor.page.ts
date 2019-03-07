import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendedorService } from 'src/services/domain/vendedor.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-vendedor',
  templateUrl: './cadastro-vendedor.page.html',
  styleUrls: ['./cadastro-vendedor.page.scss'],
})
export class CadastroVendedorPage implements OnInit {

  formGroup: FormGroup;
  // nome: AbstractControl;
  // cpf: AbstractControl;
  
  constructor(
    public formBuilder: FormBuilder, 
    public vendedorService: VendedorService,
    public alertCtrl: AlertController,
    private router: Router) { 

    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50)])],
      cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[0-9]*$")])]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("formGroup: " + this.formGroup.value);
    this.vendedorService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {});
  }

  async showInsertOk() {
    const alert = await this.alertCtrl.create({
      header: "Sucesso!",
      message: "Cadastro efetuado com sucesso",
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
