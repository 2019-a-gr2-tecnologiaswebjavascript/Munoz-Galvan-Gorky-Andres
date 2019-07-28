import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {CajeroHttpService} from './servicios/http/cajero-http.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './servicios/auth/auth.service';
import {EntrenadorHttpService} from './servicios/http/entrenador-http.service';
import {ModalEditarEntrenadorPageModule} from './modal-editar-entrenador/modal-editar-entrenador.module';
import {ModalCrearEntrenadorPageModule} from './modal-crear-entrenador/modal-crear-entrenador.module';


@NgModule({
    declarations: [AppComponent, LoginComponent],
    entryComponents: [],
    imports: [BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ModalCrearEntrenadorPageModule,
        ModalEditarEntrenadorPageModule],
    providers: [
        StatusBar,
        SplashScreen,
        CajeroHttpService,
        EntrenadorHttpService,
        AuthService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}