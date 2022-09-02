import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {NgxPaginationModule} from 'ngx-pagination';
 
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { itemsReducer } from '../app/store/reducers/item.reducer';
import { ItemEffects } from '../app/store/effects/item.effects';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    HeaderComponent,
    FooterComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forRoot({items: itemsReducer}),
    EffectsModule.forRoot([ItemEffects]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
