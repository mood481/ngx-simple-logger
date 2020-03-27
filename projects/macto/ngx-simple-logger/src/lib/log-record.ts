import {SimpleLogLevel} from "./types";
import {LOG_LEVELS} from "./constants";


export class LogRecord 
{
    public message: string;
    public messagePrefix: string;
    public extraRaw: Array<any>;
    
    private readonly level: SimpleLogLevel;
    
    public constructor (message: string, 
                        level: SimpleLogLevel = SimpleLogLevel.DEBUG, 
                        hasDate = true,
                        ...extra: Array<any>
    ) {
        this.message = message;
        this.messagePrefix = (hasDate ? new Date().toISOString() + " - " : "") + LOG_LEVELS[level];
        this.extraRaw = extra || [];
        
        this.level = level;
    }
    
    public getLevel(): SimpleLogLevel {
        return this.level;
    }
    
    public getFormattedExtra(): string {
        return this.formatParams(this.extraRaw);
    }

    public getFullMessage(): string {
        let ret = this.messagePrefix + " - " + this.message;
        if (this.extraRaw.length > 0) {
            ret += " - Extra Info: " + this.formatParams(this.extraRaw);
        }

        return ret;
    }
    
    
    // TODO: review comparison and check toString... 
    private formatParams(params: Array<any>): string {
        let ret = null; 
        if (params) {
            ret = params.join(",");
    
            // Find objects and stringify them
            if (params.some(p => typeof p == "object")) {
                ret = "";
                for (let item of params) {
                    ret += JSON.stringify(item) + ",";
                }
            }
        }

        return ret;
    }
}
