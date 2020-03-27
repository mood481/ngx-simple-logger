import {Injectable} from '@angular/core';

import {LoggerConfigWrapper} from "./logger-config.wrapper";
import {LoggerConfig, LoggerPublisher, SimpleLogLevel} from "./types";
import {LoggerConsole} from "./publishers/logger-console";
import {LogRecord} from "./log-record";


@Injectable()
export class SimpleLoggerService
{
    private config: LoggerConfigWrapper;
    private publishers = new Array<LoggerPublisher>();

    constructor(logConfig: LoggerConfig) {
        this.config = new LoggerConfigWrapper(logConfig);
        this.init();
    }

    public debug(message: string, ...data: Array<any>) {
        this.log(message, SimpleLogLevel.DEBUG, data);
    }

    public info(message: string, ...data: Array<any>) {
        this.log(message, SimpleLogLevel.INFO, data);
    }

    public warn(message: string, ...data: Array<any>) {
        this.log(message, SimpleLogLevel.WARNING, data);
    }

    public error(message: string, ...data: Array<any>) {
        this.log(message, SimpleLogLevel.ERROR, data);
    }

    public critical(message: string, ...data: Array<any>) {
        this.log(message, SimpleLogLevel.CRITICAL, data);
    }

    public updateConfig(config: LoggerConfig) {
        this.config.update(config);
        this.init();
    }

    private init() {
        const config = this.config.getCurrent();
        if (!config.isConsoleDisabled) {
            this.publishers.push(new LoggerConsole(config.level));
        }
        if (config.customPublishers) {
            this.publishers = this.publishers.concat(config.customPublishers)
        }
    }

    private log(msg: string, msgLevel: SimpleLogLevel, ...extra: Array<any>) {
        const record = new LogRecord(msg, msgLevel, true, extra);
        for (const pub of this.publishers) {
            if (pub.level && msgLevel >= pub.level) {
                pub.log(record);
            }
        }
    }
}
