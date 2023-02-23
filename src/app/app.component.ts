import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { faBars, faXmark, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { themeChange } from "theme-change";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // fontawesome icons
  faBars = faBars;
  faXmark = faXmark;
  faAngular = faAngular;
  faSun = faSun;
  faMoon = faMoon;

  title = "Tour of Heroes";
  // current route, to know which button to set as "current" in the navbar
  route = "";
  // flag to know if the mobile navigation menu is open
  navOpen = false;

  constructor(location: Location, router: Router) {
    // initialize the theme changer
    themeChange();

    router.events.subscribe(() => {
      this.route = location.path();
    });
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  getTheme() {
    return (localStorage.getItem('theme') !== null) ? localStorage.getItem('theme') : 'dark';
  }
}
