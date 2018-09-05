import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
