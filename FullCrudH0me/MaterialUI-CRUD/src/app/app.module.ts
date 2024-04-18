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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';



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
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,

    HttpClientModule, NgbModule /*Servise ichidagi HttpClient togri ishlashi uchun import qilindi */,
    MatSlideToggleModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
