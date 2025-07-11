import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';
import { PersonalinfoComponent } from './personal-info/personal-info.component';
import { MembershipComponent } from './membership/membership.component';
import { BeginnerComponent } from './beginner/beginner.component';
import { ModerateComponent } from './moderate/moderate.component'; // ✅ fixed casing here

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'registration', component: RegistrationComponent },     // ✅ matches navigation method
  { path: 'personal-info', component: PersonalinfoComponent } ,
  {path: 'membership',component: MembershipComponent},
  { path: 'beginner', component: BeginnerComponent },
  { path: 'moderate', component: ModerateComponent }    // ✅ proper route and casing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
