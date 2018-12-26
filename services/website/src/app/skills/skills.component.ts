import {languages, skills, tools} from '../dummy-data';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  mySkills = skills;
  myLanguages = languages;
  myTools = tools;

  constructor() { }

  ngOnInit() {
  }

}
