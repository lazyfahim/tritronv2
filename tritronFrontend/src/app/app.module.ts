import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { JwtModule } from "@auth0/angular-jwt";

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './comps/home/home.component';
import { ContestsComponent } from './comps/contests/contests.component';
import { ContestlistitemComponent } from './comps/contests/contestlistitem/contestlistitem.component';
import { RegisterComponent } from './comps/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {LoginComponent} from './comps/login/login.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { FooterComponent } from './comps/footer/footer.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {EscapeHtmlPipe} from './pipes/keep-html.pipe';
import { LoaderComponent } from './shared/loader/loader.component';
import {HttpInterceptor} from './_interceptors/http.interceptor';
import {SortablejsModule} from 'angular-sortablejs';
import {MatButtonModule, MatIconModule, MatInputModule, MatSelectModule} from '@angular/material';
import { AsciPipe } from './pipes/asci.pipe';
import { ContestComponent } from './comps/contests/contest/contest.component';
import { BeforecontestComponent } from './comps/contests/contest/beforecontest/beforecontest.component';
import { RunningcontestComponent } from './comps/contests/contest/runningcontest/runningcontest.component';
import { AftercontestComponent } from './comps/contests/contest/aftercontest/aftercontest.component';

export function tokenGetter() {
    return localStorage.getItem("token");
}

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ContestsComponent,
        ContestlistitemComponent,
        RegisterComponent,
        LoginComponent,
        ProfileComponent,
        FooterComponent,
        LoaderComponent,
        ContestComponent,
        BeforecontestComponent,
        RunningcontestComponent,
        AftercontestComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AngularEditorModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        SortablejsModule.forRoot({ animation: 150 }),
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                skipWhenExpired: true,
                whitelistedDomains: ["example.com"],
                blacklistedRoutes: ["example.com/examplebadroute/"]
            }
        })
    ],
    exports:[NgbModule],
    providers: [
        {
            provide:HTTP_INTERCEPTORS,
            useClass:HttpInterceptor,
            multi:true
        }
        ],
    bootstrap: [AppComponent]
})
export class AppModule { }
