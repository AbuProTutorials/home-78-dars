import { Component } from '@angular/core';
import { CRUDService } from '../../services/crud.service';
import { CreateDTO } from '../../models/create-dto';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {

  response!:string

  id!:number

  createDto:CreateDTO={
    carName:"",
    brandName:"",
    price:0,
    rating:0
  }

  consolecha(){
    this.crudService.getById(this.id).subscribe({/*
                              ^^^^^^^^^ -> async await bilan birxil*/
        next:(data)=>{
          document.getElementById("element")!.innerHTML="Id Mavjud"
          document.getElementById("element")!.style.color="green"
          console.log("malumot keldi");
          console.log(data)
          // ^-^^^-^ -> ma'lumot kelsa consolega yozadi
        },
        error:(err)=>{
          document.getElementById("element")!.innerHTML="Id Mavjud Emas"
          document.getElementById("element")!.style.color="red"

          console.log("topilmadi");
          console.log(err)
          // ^-^^^-^ -> xatolik yuzbersa consolega yozadi
        }

    })
  }

  constructor(private crudService:CRUDService){}

  update(id:number,data:CreateDTO){
    this.crudService.update(id,data).subscribe({/*
                              ^^^^^^^^^ -> async await bilan birxil*/
        next:(data)=>{
          this.response=data;
          console.log(data);
          // ^-^^^-^ -> ma'lumot kelsa consolega yozadi
        },
        error:(err)=>{
          console.log(err);
          // ^-^^^-^ -> xatolik yuzbersa consolega yozadi
        }

    })
  }

  start(){
    if(document.getElementById("element")?.textContent=="Id Mavjud Emas")
    {
      document.getElementById("updatestatus")!.innerHTML="Element Mavjud Emasssss"
      document.getElementById("updatestatus")!.style.color="red"
    }
    else{

      this.update(this.id,this.createDto)
    }
  }
}
