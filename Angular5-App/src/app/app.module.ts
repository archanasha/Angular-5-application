import { CbButtonModule } from './shared/cb-buttons/cb-buttons.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipe/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGaurdService } from './auth/auth-gaurd.service';
import { RecipeModule } from './recipe/recipe.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingService } from './shopping/shopping.service';
import { ShoppingModule } from './shopping/shopping.module';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthInterceptor } from './shared/auth.intercetor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CbButtonModule,
    RecipeModule,
    SharedModule,
    ShoppingModule,
    AuthModule,
  ],
  providers: [
    ShoppingService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGaurdService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
