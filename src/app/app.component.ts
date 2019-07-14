import { Component } from "@angular/core";

@Component({
  selector: "portfolio",
  template: `
    <top-section></top-section>
    <header></header>
    <div class="container main-content"><router-outlet></router-outlet></div>
  `,
  styles: []
})
export class AppComponent {
  title = "maantuPortfolio";
}
