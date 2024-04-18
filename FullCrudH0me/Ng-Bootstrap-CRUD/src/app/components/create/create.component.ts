import { Component } from '@angular/core';
import { CRUDService } from '../../services/crud.service';
import { CreateDTO } from '../../models/create-dto';

import {  inject, TemplateRef } from '@angular/core';

import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
