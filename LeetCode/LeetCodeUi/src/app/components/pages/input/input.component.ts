import { Component } from '@angular/core';
import { SubmitService } from '../../../services/submit.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Code } from '../../../models/code';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  constructor(private service:SubmitService){}
  

  inputcha:Code={
    code:""
  }
  response:string=""

  submit(){
    this.service.submit(this.inputcha).subscribe({/*
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

}
