import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GetallComponent } from './components/getall/getall.component';
import { RouterModule } from '@angular/router';                                     // RouterModule |ishlashi uchun
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputOtpModule } from 'primeng/inputotp';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetallComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, /* routerLink to'g'ri ishlashi uchun(pagedan pagega
                      otayotganda refresh bolmasligi uchun)*/
    FormsModule,
    ButtonModule,
    TableModule,
    HttpClientModule, NgbModule,
    DialogModule /*Servise ichidagi HttpClient togri ishlashi uchun import qilindi */,
    InputTextModule,
    NoopAnimationsModule,
    InputOtpModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
