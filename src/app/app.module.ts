import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CoreModule } from './modules/core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppInitService } from './modules/core/services';

export function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.initializeApp();
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule],
  providers: [
    AppInitService,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppInitService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
