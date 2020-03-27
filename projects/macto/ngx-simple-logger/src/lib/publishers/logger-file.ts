import {Observable, of} from "rxjs";

import {LogRecord} from "../log-record";
import {LoggerPublisher} from "../types";


export class LoggerFile implements LoggerPublisher
{
    public location: string;

    public constructor() {

    }

    public clear(): Observable<boolean> {
        return of(false);
    }

    public log(record: LogRecord): Observable<boolean> {
        return of(false);
    }


    private writeLog(entry: LogRecord) {

    }

}
