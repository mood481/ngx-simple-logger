import {LogRecord} from "./log-record";
import {Observable} from "rxjs";

export enum SimpleLogLevel 
{
    NONE = 0,
    DEBUG,
    INFO,
    WARNING,
    ERROR,
    CRITICAL
}

export interface LoggerPublisher 
{
    location?: string;
    level?: SimpleLogLevel;
    log(record: LogRecord): Observable<boolean>;
    clear(): Observable<boolean>;
}

export class LoggerConfig 
{
    public customPublishers?: Array<LoggerPublisher>;
    public isConsoleDisabled?: boolean;
    public level: SimpleLogLevel;
}
