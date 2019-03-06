import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-vendedor',
  templateUrl: './cadastro-vendedor.page.html',
  styleUrls: ['./cadastro-vendedor.page.scss'],
})
export class CadastroVendedorPage implements OnInit {

  formGroup: FormGroup;
  
  constructor(public formBuilder: FormBuilder) { 

    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(13)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("enviou o form");
  }

}
