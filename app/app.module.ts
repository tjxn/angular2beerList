import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot([
        //{path: 'beers', component: BeerListComponent},
        //{path: 'beer/:id', component: ProductDetailComponent},
        {path: 'welcome', component: WelcomeComponent},
        {path: '', redirectTo: 'welcome', pathMatch: 'full'}
      ])
     ],
  declarations: [ AppComponent, WelcomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
