import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendedorService } from 'src/services/domain/vendedor.service';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edita-vendedor',
  templateUrl: './edita-vendedor.page.html',
  styleUrls: ['./edita-vendedor.page.scss'],
})
export class EditaVendedorPage implements OnInit {

  formGroup: FormGroup;
  private id: string;
  private nome: string;

  constructor(
    public formBuilder: FormBuilder, 
    public vendedorService: VendedorService,
    public alertCtrl: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params["id"];
      this.nome = params["nome"];
    });
    
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50)])]
    });
   }

  ngOnInit() {
    this.formGroup.setValue({nome: this.nome});
  }

  onSubmit() {
    console.log("formGoup: " + this.formGroup.value);
    this.vendedorService.update(this.id, this.formGroup.value)
      .subscribe(response => {
        this.showUpdateOk();
      },
      error => {console.log("Erro na atualização")});
  }

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
