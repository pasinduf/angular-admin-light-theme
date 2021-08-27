import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgeComponent } from './badge/badge.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ListgroupComponent } from './listgroup/listgroup.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { TyphographyComponent } from './typhography/typhography.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ToastComponent } from './toast/toast.component';
import { TagsComponent } from './tags/tags.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ToastContainerComponent } from './toast/toast-container/toast-container.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [AlertsComponent, AvatarComponent, BreadcrumbComponent, ButtonsComponent, BadgeComponent, DropdownComponent, ThumbnailsComponent, ListgroupComponent, NavigationComponent, PaginationComponent, PopoverComponent, ProgressComponent, SpinnersComponent, MediaObjectComponent, TyphographyComponent, TooltipComponent, ToastComponent, TagsComponent, ToastContainerComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot(),
    HighlightModule,
    ClipboardModule,
  ],
  providers: [ 
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ElementsModule { }
