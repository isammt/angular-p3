import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { IsabellaListServiceService } from './isabella-list-service.service';
import { IsabellaHomeComponentComponent } from './isabella-home-component/isabella-home-component.component';
import { IsabellaListComponentComponent } from './isabella-list-component/isabella-list-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: IsabellaHomeComponentComponent,
      },
      {
        path: 'list',
        component: IsabellaListComponentComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    IsabellaHomeComponentComponent,
    IsabellaListComponentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [IsabellaListServiceService],
})
export class AppModule {}
