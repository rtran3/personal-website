import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { faGithub,faFacebook,
  faLinkedin,faPython,
  faJava,faHtml5,faCss3,faJs,faAngular,
faNodeJs,faBootstrap,faGitAlt,faDocker} from '@fortawesome/free-brands-svg-icons';

import { faUser,faBriefcase,faCode} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  successfulSubmit = false;
  isSubmitting=false;
  showNavLinks=false;
  faGithub=faGithub;
  faFacebook=faFacebook;
  faLinkedin=faLinkedin;
  faPython=faPython;
  faJava=faJava;
  faHtml=faHtml5;
  faCss=faCss3;
  faJavascript=faJs;
  faAngular=faAngular;
  faNode=faNodeJs;
  faBootstrap=faBootstrap;
  faGit=faGitAlt;
  faDocker=faDocker;
  faHome=faUser;
  faWork=faBriefcase;
  faProject=faCode;

  constructor(private http: HttpClient) {}

  onSubmitMessage(form: NgForm) {
    this.isSubmitting=true;
    const submitForm = {emailAddress: form.value.email, msg: form.value.msg};
    this.http.post<{msg: string}>('https://rtran.onrender.com/api/submit', submitForm)
      .subscribe((res) => {
        this.isSubmitting=false;
        this.successfulSubmit=true;
        console.log(res.msg);
        setTimeout(() => {
          this.successfulSubmit = false;
        }, 10000);
        form.reset();
      });
  }

  toggleNavbar(){
    if (this.showNavLinks===false) {
      this.showNavLinks=true;
    }
    else {
      this.showNavLinks=false;
    }
  }


}
