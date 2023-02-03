import { TestBed, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { SimpleLoggerModule, SimpleLoggerService, SimpleLogLevel } from "@macto/ngx-simple-logger";

describe("AppComponent", () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ SimpleLoggerModule.forRoot({ level: SimpleLogLevel.DEBUG }) ],
      providers: [ SimpleLoggerService ]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngx-logger-demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("ngx-logger-demo");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".content p").textContent).toContain("ngx-logger-demo is running");
  });
});
