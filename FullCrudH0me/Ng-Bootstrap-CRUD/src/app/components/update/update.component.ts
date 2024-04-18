import { Component } from '@angular/core';
import { CRUDService } from '../../services/crud.service';
import { CreateDTO } from '../../models/create-dto';
import {  inject, TemplateRef } from '@angular/core';

import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {

  response!:string

  id:number=0

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












  
  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}
