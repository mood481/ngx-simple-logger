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
        // TODO: this.publishers.push(new LogConsole());
    }
}
