import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './components/CategoryListComponent';
import { HttpClientModule } from '@angular/common/http';
import { CardViewComponent } from './components/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
