import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DomainCardComponent } from './domain-card/domain-card.component';
import { AppComponent } from './app.component';
import { TopSitesComponent } from './top-sites/top-sites.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DomainCardComponent,
    TopSitesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
