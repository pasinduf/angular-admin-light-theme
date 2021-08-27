import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { NotificationSidebarComponent } from './components/notification-sidebar/notification-sidebar.component';

import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { FullscreenToggleDirective } from './directives/fullscreen-toggle.directive';
import { MessageLayoutComponent } from './layouts/message-layout/message-layout.component';
import { ErrorLayoutComponent } from './layouts/error-layout/error-layout.component';
import { SearchDatePipe } from './pipes/search-date.pipe';
import { HoriFullLayoutComponent } from './layouts-horizontal/hori-full-layout/hori-full-layout.component';
import { HoriHeaderComponent } from './components-horizontal/hori-header/hori-header.component';
import { HorizontalMenuComponent } from './components-horizontal/horizontal-menu/horizontal-menu.component';


@NgModule({
  declarations: [ FooterComponent, HeaderComponent, LoaderComponent, TapToTopComponent, SidemenuComponent, NotificationSidebarComponent, FullLayoutComponent, ContentLayoutComponent, FullscreenToggleDirective,  MessageLayoutComponent, ErrorLayoutComponent, SearchDatePipe, HoriFullLayoutComponent, HoriHeaderComponent, HorizontalMenuComponent  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgSelectModule
  ],
  exports: [
    LoaderComponent, 
    TapToTopComponent,
    FooterComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
    SearchDatePipe
  ],
})
export class SharedModule { }
