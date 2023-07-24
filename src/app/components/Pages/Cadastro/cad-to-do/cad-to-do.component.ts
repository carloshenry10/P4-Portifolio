import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Pessoa, ToDo } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/Pessoa.service';
import { ToDoService } from 'src/app/services/ToDo.service';

@Component({
  selector: 'app-cad-to-do',
  templateUrl: './cad-to-do.component.html',
  styleUrls: ['./cad-to-do.component.css']
})
export class CadtodoComponent implements OnInit {
  pessoa?: Pessoa;
  todoForm!: FormGroup;
  todoAux?:ToDo;


  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private toDoService: ToDoService,

  ) {}

  ngOnInit(): void {
   this.carregaDados();
   this.initForm(); // Chama o initForm apenas após atribuir a this.pessoa
  }

  carregaDados(){
    this.pessoaService.pessoaRetorno$.subscribe((pessoas) => {
      // Verifica se há pelo menos uma pessoa no array antes de atribuir a this.pessoa
      if (pessoas.length > 0) {
        this.pessoa = pessoas[0];
      }
    });
  }


  initForm(): void {
    this.todoForm = this.formBuilder.group({
      do: ['', Validators.required]
    });
  }

  addTodo(): void {

    const competencia = this.todoForm.get('do')?.value;

    if (this.todoForm.valid) {
      const newTodo: ToDo = {
        id: 0, // Set to 0 or undefined, depending on how the backend handles new items
        do: competencia,
        pessoaId: this.pessoa?.id
      };

      this.todoAux = newTodo


       this.toDoService.addToDo(newTodo).subscribe((response) => {
         this.pessoa!.todo.push(response); // Push the new ToDo to the existing array
       });
    }
    this.carregaDados();
  }


  removeTodo(index: number): void {
    const todoId = this.pessoa!.todo[index].id!;
    // Chame o serviço para excluir o ToDo do backend
    this.toDoService.deleteToDo(todoId).subscribe(() => {
      // Remova o ToDo da lista de ToDos da pessoa
      this.pessoa!.todo.splice(index, 1);
      // Remova o FormGroup do FormArray
      (this.todoForm.get('todos') as FormArray).removeAt(index);
    });
  }

  onSubmit(): void {
    // Nada a fazer aqui, a adição é feita no método addTodo()
  }
}
