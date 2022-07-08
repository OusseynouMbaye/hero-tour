import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app-component.html", // <-- added
  styleUrls: [`./app-component.css`], // <-- added`],
})
export class AppComponent {
  title = "angular-tour-of-heroes";
}
