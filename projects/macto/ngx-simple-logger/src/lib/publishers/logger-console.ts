import {Observable, of} from "rxjs";

import {LogRecord} from "../log-record";
import {LoggerPublisher, SimpleLogLevel} from "../types";
import {LoggerConsoleUtils} from "./logger-console.utils";


export class LoggerConsole implements LoggerPublisher
{
    public level: SimpleLogLevel;

    public constructor(level: SimpleLogLevel) {
        this.level = level;
    }

    public clear(): Observable<boolean> {
        return of(false);
    }

    public log(record: LogRecord): Observable<boolean> {
        this.writeLog(record);
        return of(true);
    }


    private writeLog(entry: LogRecord) {
        const style = LoggerConsoleUtils.getStyleByLevel(entry.getLevel());
        switch (entry.getLevel()) {
            case SimpleLogLevel.ERROR:
            case SimpleLogLevel.CRITICAL:
                console.error(`%c${entry.messagePrefix}`, style, entry.message, ...entry.extraRaw);
                break;
            case SimpleLogLevel.WARNING:
                console.warn(`%c${entry.messagePrefix}`, style, entry.message, ...entry.extraRaw);
                break;
            case SimpleLogLevel.INFO:
                // eslint-disable-next-line no-console
                console.info(`%c${entry.messagePrefix}`, style, entry.message, ...entry.extraRaw);
                break;
            default:
                console.log(`%c${entry.messagePrefix}`, style, entry.message, ...entry.extraRaw);
        }
    }
}
