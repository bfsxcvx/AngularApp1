import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';



@NgModule({
  declarations: [
    AppComponent,
    UserEditorComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
   ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
