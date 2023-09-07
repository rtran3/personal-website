import { Component } from '@angular/core';

import { faUser,faBriefcase,faCode} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  showNavLinks=false;
  faHome=faUser;
  faWork=faBriefcase;
  faProject=faCode;

  toggleNavbar(){
    if (this.showNavLinks===false) {
      this.showNavLinks=true;
    }
    else {
      this.showNavLinks=false;
    }
  }

}
