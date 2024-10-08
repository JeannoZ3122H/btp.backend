import { ApplicationConfig, importProvidersFrom, isDevMode, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material-module';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }), 
        provideRouter(routes), 
        provideClientHydration(),
        { provide: LOCALE_ID, useValue: 'fr-FR' },
        provideAnimationsAsync(),
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
        }),
        provideHttpClient(withFetch()),
        importProvidersFrom(
            // TranslateModule.forRoot({
            //     loader: {
            //         provide: TranslateLoader,
            //         useFactory: HttpLoaderFactory,
            //         deps: [HttpClient]
            //     }
            // }),
            // NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
            // NgxUiLoaderRouterModule,
            MaterialModule,
            // NgxPaginationModule,
            // NgxFullCalendarModule,
            RouterModule.forRoot(routes, {
                scrollPositionRestoration: 'enabled', // Restaure la position de défilement
                anchorScrolling: 'enabled', // Active le défilement par ancre
            }),
        ), 
    ]
};
