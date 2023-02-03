import {Observable} from "rxjs";
import { LogRecord } from "./log-record";


export abstract class LogPublisher
{
    public location: string;
    public abstract log(record: LogRecord): Observable<boolean>;
    public abstract clear(): Observable<boolean>;
}
