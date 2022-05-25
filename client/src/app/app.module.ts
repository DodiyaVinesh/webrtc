import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocketIoModule } from 'ngx-socket-io';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot({ url: 'https://vinesh-call-app.glitch.me/' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
