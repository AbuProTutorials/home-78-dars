import { Component, OnInit } from '@angular/core';            // Component, OnInit |ishlashi uchun
import { User } from '../../models/user';                     // User |ishlashi uchun
import { CRUDService } from '../../services/crud.service';    // CRUDService |ishlashi uchun


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrl: './getall.component.scss'
})
export class GetallComponent implements OnInit { 

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  /*                                    ^^^^^^ -> OnInit component chaqirilganda getAll funksiyani
                                                   avtomatik chaqirish uchun implement qilindi*/
  cars!: User[];

  constructor (private crudService:CRUDService){}

  ngOnInit(): void {
// ^^^^^^^ -> OnInitni implement qilinishi kerak bolgan funksiyasi
      this.getAll()
  }

  getAll(){
    this.crudService.getAll().subscribe({/*
                              ^^^^^^^^^ -> async await bilan birxil*/
        next:(data)=>{
          this.cars=data;
          console.log(data);
          // ^-^^^-^ -> ma'lumot kelsa consolega yozadi
        },
        error:(err)=>{
          console.log(err);
          // ^-^^^-^ -> xatolik yuzbersa consolega yozadi
        }

    })
  }
}
