import {SimpleLogLevel} from "../types";


export class LoggerConsoleUtils
{
    public static getStyleByLevel(level: SimpleLogLevel): string {
        let ret = "color:";
        switch (level) {
            case SimpleLogLevel.DEBUG:
            case SimpleLogLevel.INFO: 
                ret += "green";
                break;
            case SimpleLogLevel.WARNING:
                ret += "goldenrod";
                break;
            case SimpleLogLevel.ERROR:
            case SimpleLogLevel.CRITICAL:
                ret += "red";
                break;
            default:
                ret = "font-style:italic";
        }
        
        return ret;
    }
}
