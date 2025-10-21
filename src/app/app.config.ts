import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
// 🚨 NECESARIO: Importar provideHttpClient y withFetch para las peticiones HTTP
import { provideHttpClient, withFetch } from '@angular/common/http'; 

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    // 🚨 CORRECCIÓN: Agregar la configuración del HttpClient
    provideHttpClient(withFetch())
  ]
};