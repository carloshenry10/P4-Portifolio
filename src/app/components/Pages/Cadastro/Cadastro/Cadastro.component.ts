import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Cadastro',
  templateUrl: './Cadastro.component.html',
  styleUrls: ['./Cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  voltarParaHome(): void {
    this.router.navigate(['/']); // Redireciona para a rota raiz (página inicial)
  }

}
