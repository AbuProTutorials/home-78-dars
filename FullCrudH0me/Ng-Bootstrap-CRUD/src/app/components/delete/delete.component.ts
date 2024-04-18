import { Component } from '@angular/core';
import { inject, TemplateRef } from '@angular/core';
import { CRUDService } from '../../services/crud.service';


import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
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
