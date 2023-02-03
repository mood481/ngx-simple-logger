import { Component } from "@angular/core";
import {SimpleLoggerService} from "@macto/ngx-simple-logger";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "ngx-logger-demo";

    constructor(logger: SimpleLoggerService) {
        logger.debug("AppComponent initialized");
        logger.warn("warning message");
        logger.error("error!!!", logger);
    }
}
