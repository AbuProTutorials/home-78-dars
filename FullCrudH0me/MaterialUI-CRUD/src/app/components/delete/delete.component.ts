import { Component } from '@angular/core';
import { inject, TemplateRef } from '@angular/core';
import { CRUDService } from '../../services/crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  value:string="hello"
  response!: string

  id: number = 0


  constructor(private crudService: CRUDService) { }

  delete(id: number) {
    this.crudService.delete(id).subscribe({/*
                              ^^^^^^^^^ -> async await bilan birxil*/
      next: (data) => {
        this.response = data;
        console.log(data);
        // ^-^^^-^ -> ma'lumot kelsa consolega yozadi
      },
      error: (err) => {
        console.log(err);
        // ^-^^^-^ -> xatolik yuzbersa consolega yozadi
      }

    })
  }

  start() {
    this.delete(this.id)
  }

  consolecha(){
    this.crudService.getById(this.id).subscribe({/*
                              ^^^^^^^^^ -> async await bilan birxil*/
        next:(data)=>{
          document.getElementById("element")!.innerHTML="Id Mavjud"
          document.getElementById("element")!.style.color="green"
          console.log("malumot keldi");
          // ^-^^^-^ -> ma'lumot kelsa consolega yozadi
        },
        error:(err)=>{
          document.getElementById("element")!.innerHTML="Id Mavjud Emas"
          document.getElementById("element")!.style.color="red"

          console.log("topilmadi");
          // ^-^^^-^ -> xatolik yuzbersa consolega yozadi
        }

    })
  }
}
