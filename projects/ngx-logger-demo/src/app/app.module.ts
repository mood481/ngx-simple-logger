import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SimpleLoggerModule, SimpleLoggerService, SimpleLogLevel} from "@macto/ngx-simple-logger";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SimpleLoggerModule.forRoot({ level: SimpleLogLevel.DEBUG }),
    ],
    providers: [SimpleLoggerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
