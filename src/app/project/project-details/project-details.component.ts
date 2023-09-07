import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit{
  projectNumber: Number = 1;

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.projectNumber=params['id'];
        }
      );
  }

}
