import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReplyFallbackComponent } from './reply-fallback/reply-fallback.component'; 
import { ReplyFallbackMsgComponent } from './reply-fallback-msg/reply-fallback-msg.component'; 
 

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    Routing  ],
  declarations: [ AppComponent, HelloComponent, ReplyFallbackComponent,ReplyFallbackMsgComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
