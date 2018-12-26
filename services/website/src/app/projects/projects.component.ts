import {Component, OnInit} from '@angular/core';
import {projects} from '../dummy-data';
import {Project} from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = projects;

  constructor() { }

  ngOnInit() {
  }

}
