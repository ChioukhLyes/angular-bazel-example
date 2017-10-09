
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Module_joystick_team0} from './team0/module';
import {Module_joystick_team1} from './team1/module';
import {Module_joystick_team2} from './team2/module';
import {Module_joystick_team3} from './team3/module';
import {Module_joystick_team4} from './team4/module';
import {Module_joystick_team5} from './team5/module';
import {Module_joystick_team6} from './team6/module';
import {Module_joystick_team7} from './team7/module';
import {Module_joystick_team8} from './team8/module';
import {Module_joystick_team9} from './team9/module';

@Component({
  selector: 'joystick-app',
  template: `<h1>joystick division homepage</h1>`,
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      Module_joystick_team0,
      Module_joystick_team1,
      Module_joystick_team2,
      Module_joystick_team3,
      Module_joystick_team4,
      Module_joystick_team5,
      Module_joystick_team6,
      Module_joystick_team7,
      Module_joystick_team8,
      Module_joystick_team9
    ],
})
export class AppModule {}
