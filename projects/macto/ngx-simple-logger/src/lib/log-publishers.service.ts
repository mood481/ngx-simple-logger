import { Injectable } from "@angular/core";

import { LogPublisher } from "./log-publisher";

@Injectable()
export class LogPublishersService 
{
    publishers = new Array<LogPublisher>();
    
    public constructor() {
        this.buildPublishers();
    }

    buildPublishers(): void {
        //this.publishers.push(new LogConsole());
    }
}
