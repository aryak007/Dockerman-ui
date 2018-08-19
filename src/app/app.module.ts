import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatRadioModule, MatDialogModule, MatSidenavModule, MatMenu, MatMenuItem, MatGridListModule, MatListModule, MatTabsModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatChipsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MediaMatcher } from '@angular/cdk/layout'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { CdkTableModule } from '@angular/cdk/table';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DockerImageDetailFetchServiceService } from './docker-image-detail-fetch-service.service';
import { CardsComponent } from './cards/cards.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { BsModalModule } from 'ng2-bs3-modal';
import { DockerImageDeletionService } from './docker-image-deletion.service';
import { DockerTagDeletionService } from './docker-tag-deletion.service';
import { DockerNewTagService } from './docker-new-tag.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChipsComponent } from './chips/chips.component';


const appRoutes: Routes = [
  {
    path: 'dashboard/:machine_ip',
    component: DashboardComponent
  },
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SidenavComponent,
    DashboardComponent,
    ChipsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CdkTableModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule,
    JsonpModule,
    BsModalModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatChipsModule
  ],
  providers: [DockerImageDetailFetchServiceService, MediaMatcher, DockerImageDeletionService, DockerTagDeletionService, DockerNewTagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
