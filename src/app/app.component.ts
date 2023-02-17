import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // fontawesome icons
  faBars = faBars;
  faXmark = faXmark;
  faAngular = faAngular;

  title = "Tour of Heroes";
  // current route, to know which button to set as "current" in the navbar
  route = "";
  // flag to know if the mobile navigation menu is open
  navOpen = false;

  constructor(location: Location, router: Router) {
    router.events.subscribe(() => {
      this.route = location.path();
    });
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}
