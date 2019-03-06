import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-vendedor',
  templateUrl: './cadastro-vendedor.page.html',
  styleUrls: ['./cadastro-vendedor.page.scss'],
})
export class CadastroVendedorPage implements OnInit {

  formGroup: FormGroup;
  // nome: AbstractControl;
  // cpf: AbstractControl;
  
  constructor(public formBuilder: FormBuilder) { 

    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50)])],
      cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[0-9]*$")])]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      console.log("falha na validação");
      console.log(this.formGroup.controls['nome'].value);
    }
    console.log("enviou o form");
  }

}
