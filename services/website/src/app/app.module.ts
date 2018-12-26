import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProfileComponent} from './profile/profile.component';
import {ExpeiriencesComponent} from './expeiriences/expeiriences.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectComponent} from './projects/project/project.component';
import {SkillComponent} from './skills/skill/skill.component';
import {LanguageComponent} from './skills/language/language.component';
import {ToolComponent} from './skills/tool/tool.component';
import {ExpeirienceComponent} from './skills/expeirience/expeirience.component';
import {EducationsComponent} from './expeiriences/educations/educations.component';
import {CareersComponent} from './expeiriences/careers/careers.component';
import {EducationComponent} from './expeiriences/educations/education/education.component';
import {CareerComponent} from './expeiriences/careers/career/career.component';
import {RecentComponent} from './recent/recent.component';
import {RecentNewsComponent} from './recent/recent-news/recent-news.component';
import {FooterComponent} from './footer/footer.component';
import {MenuRightComponent} from './menu-right/menu-right.component';
import {LoggerService} from './logger.service';
import { LoginComponent } from './login/login.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { LoggedInComponent } from './login/logged-in/logged-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ExpeiriencesComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectComponent,
    SkillComponent,
    LanguageComponent,
    ToolComponent,
    ExpeirienceComponent,
    EducationsComponent,
    CareersComponent,
    EducationComponent,
    CareerComponent,
    RecentComponent,
    RecentNewsComponent,
    FooterComponent,
    MenuRightComponent,
    LoginComponent,
    LoggedInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
