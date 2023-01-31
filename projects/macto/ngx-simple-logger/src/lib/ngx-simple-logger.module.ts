import {CommonModule, DatePipe} from "@angular/common";
import {ModuleWithProviders, NgModule} from "@angular/core";

import {SimpleLoggerService} from "./ngx-simple-logger.service";
import {LoggerConfig} from "./types";


@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        SimpleLoggerService,
        DatePipe
    ]
})
export class SimpleLoggerModule
{
    static forRoot(config: LoggerConfig | null | undefined): ModuleWithProviders<SimpleLoggerModule> {
        return {
            ngModule: SimpleLoggerModule,
            providers: [
                {provide: LoggerConfig, useValue: config || {}},
                SimpleLoggerService
            ]
        };
    }
    static forChild(): ModuleWithProviders<SimpleLoggerModule> {
        return {
            ngModule: SimpleLoggerModule,
            providers: [
                SimpleLoggerService,
            ]
        };
    }
}
