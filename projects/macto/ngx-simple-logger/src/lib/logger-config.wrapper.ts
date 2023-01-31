import {LoggerConfig} from "./types";


export class LoggerConfigWrapper
{
    public constructor(private config: LoggerConfig) {
        //
    }

    update(config: LoggerConfig) {
        this.config = this.clone(config);
    }

    getCurrent(): LoggerConfig {
        return this.clone(this.config);
    }


    // shallow clone
    private clone(object: any): LoggerConfig {
        const cloneConfig = {} as LoggerConfig;

        Object.keys(object).forEach((key) => {
            cloneConfig[key] = object[key];
        });

        return cloneConfig;
    }
}
