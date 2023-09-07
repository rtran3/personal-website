import { Component } from '@angular/core';

import { faUser,faBriefcase,faCode} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
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
