import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';
import { PersonalinfoComponent } from './personal-info/personal-info.component';
import { MembershipComponent } from './membership/membership.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'registration', component: RegistrationComponent },     // ✅ matches navigation method
  { path: 'personal-info', component: PersonalinfoComponent } ,
  {path: 'membership',component: MembershipComponent}    // ✅ proper route and casing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
