import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { ThemeService } from './services/theme.service';
import { StyleManagerService } from './services/style-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { PatrimoniosModule } from './patrimonios/patrimonios.module';
import { PatrimoniosHomeComponent } from './patrimonios/patrimonios-home/patrimonios-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    LoginModule,
    PatrimoniosModule,
    HttpClientModule,
  ],
  providers: [ThemeService,StyleManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
