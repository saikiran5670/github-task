import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { ResultsComponent } from './results/results.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatDailogComponent } from './mat-dailog/mat-dailog.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoSearchComponent,
    ResultsComponent,
    LandingPageComponent,
    MatDailogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
