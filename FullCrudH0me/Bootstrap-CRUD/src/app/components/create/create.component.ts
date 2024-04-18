import { Component } from '@angular/core';
import { CRUDService } from '../../services/crud.service';
import { CreateDTO } from '../../models/create-dto';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  response!:string

  createDto:CreateDTO={
    carName:"",
    brandName:"",
    price:0,
    rating:0
  }

  constructor(private crudService:CRUDService){}

  create(data:CreateDTO){
    this.crudService.create(data).subscribe({/*
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
    this.create(this.createDto)
  }
}
