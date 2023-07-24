import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
  }


  Autenticar(event: any) {
    event.preventDefault(); // Evite o comportamento padrão do botão de enviar o formulário

    if (this.username === "admin" && this.password === "123") {
      this.toastr.success('Operação bem-sucedida!', 'Sucesso');
      this.router.navigate(['/cadastro']);
    } else {
      this.toastr.error('Credenciais inválidas!', 'Erro');
    }
  }


}
