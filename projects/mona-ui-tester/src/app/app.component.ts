import { Component } from "@angular/core";
import { ButtonDirective } from "mona-ui/buttons";

@Component({
    selector: "app-root",
    imports: [ButtonDirective],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css"
})
export class AppComponent {}
