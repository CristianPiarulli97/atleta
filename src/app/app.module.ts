import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AtletaListComponent } from './features/atleta/atleta-list/atleta-list.component';
import { AtletaInsertComponent } from './features/atleta/atleta-insert/atleta-insert.component';
import { FormsModule } from '@angular/forms';
import { AtletaShowComponent } from './features/atleta/atleta-show/atleta-show.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AtletaListComponent,
    AtletaInsertComponent,
    AtletaShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
