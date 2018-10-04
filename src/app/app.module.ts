import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { EventComponent } from './components/event/event.component';
import { ReviewComponent } from './components/review/review.component';
import { FeatureComponent } from './components/feature/feature.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ViewArticleComponent } from './components/view-article/view-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    AnalysisComponent,
    EventComponent,
    ReviewComponent,
    FeatureComponent,
    OpinionComponent,
    SidebarComponent,
    ViewArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
