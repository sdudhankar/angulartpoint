import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HighlightJsModule} from 'ngx-highlight-js'; 

import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { AngularComponent } from './angular/angular.component';
import { HomeComponent } from './home/home.component';
import { AHomeComponent } from './angular/ahome/ahome.component';
import { AOverviewComponent } from './angular/a-overview/a-overview.component';
import { AenvironmentComponent } from './angular/aenvironment/aenvironment.component';
import { AcliComponent } from './angular/acli/acli.component';
import { AdirStructureComponent } from './angular/adir-structure/adir-structure.component';
import { AstyleGuideComponent } from './angular/astyle-guide/astyle-guide.component';
import { AdataTypeComponent } from './angular/adata-type/adata-type.component';
import { AvariableComponent } from './angular/avariable/avariable.component';
import { AclassObjectComponent } from './angular/aclass-object/aclass-object.component';
import { AstringComponent } from './angular/astring/astring.component';
import { AoperatorsLoopsComponent } from './angular/aoperators-loops/aoperators-loops.component';
import { AfarfunComponent } from './angular/afarfun/afarfun.component';
import { AbindingComponent } from './angular/abinding/abinding.component';
import { AdirectiveComponent } from './angular/adirective/adirective.component';
import { AcompLifeCycleComponent } from './angular/acomp-life-cycle/acomp-life-cycle.component';
import { AinputoutputComponent } from './angular/ainputoutput/ainputoutput.component';
import { AinterfaceComponent } from './angular/ainterface/ainterface.component';
import { AserviceComponent } from './angular/aservice/aservice.component';
import { AdiComponent } from './angular/adi/adi.component';
import { AhttpComponent } from './angular/ahttp/ahttp.component';
import { ArouterComponent } from './angular/arouter/arouter.component';
import { AformComponent } from './angular/aform/aform.component';
import { AarchitectureComponent } from './angular/aarchitecture/aarchitecture.component';
import { AcomponentComponent } from './angular/acomponent/acomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    AngularComponent,
    HomeComponent,
    AHomeComponent,
    AOverviewComponent,
    AenvironmentComponent,
    AcliComponent,
    AdirStructureComponent,
    AstyleGuideComponent,
    AdataTypeComponent,
    AvariableComponent,
    AclassObjectComponent,
    AstringComponent,
    AoperatorsLoopsComponent,
    AfarfunComponent,
    AbindingComponent,
    AdirectiveComponent,
    AcompLifeCycleComponent,
    AinputoutputComponent,
    AinterfaceComponent,
    AserviceComponent,
    AdiComponent,
    AhttpComponent,
    ArouterComponent,
    AformComponent,
    AarchitectureComponent,
    AcomponentComponent,
  ],
  imports: [
    BrowserModule,
    HighlightJsModule,
      RouterModule.forRoot([
      {path:'', redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'java',component:JavaComponent},
      {path:'ahome',component:AHomeComponent},
      {path:'angular',component:AngularComponent},
      {path:'aoverview',component:AOverviewComponent},
      {path:'aenvironment',component:AenvironmentComponent},
      {path:'acli',component:AcliComponent},
      {path:'adirstr',component:AdirStructureComponent},
      {path:'aarchit',component:AarchitectureComponent},
      {path:'astyleguide',component:AstyleGuideComponent},
      {path:'acomponent',component:AcomponentComponent},
      {path:'adatatype',component:AdataTypeComponent},
      {path:'avariable',component:AvariableComponent},
      {path:'aclassobject',component:AclassObjectComponent},
      {path:'astring',component:AstringComponent},
      {path:'aoprloop',component:AoperatorsLoopsComponent},
      {path:'afarrfun',component:AfarfunComponent},
      {path:'abinding',component:AbindingComponent},
      {path:'adirective',component:AdirectiveComponent},
      {path:'aclc',component:AcompLifeCycleComponent},
      {path:'ainputoutput',component:AinputoutputComponent},
      {path:'ainterface',component:AinterfaceComponent},
      {path:'aservice',component:AserviceComponent},
      {path:'adi',component:AdiComponent},
      {path:'ahttp',component:AhttpComponent},
      {path:'arouter',component:ArouterComponent},
      {path:'aform',component:AformComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
