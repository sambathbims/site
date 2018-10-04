import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: "",
    component: NewsComponent
  },
  {
    path: "news",
    component:NewsComponent
  },
  {
    path: "analysis",
    component:AnalysisComponent
  },
  {
    path: "event",
    component:EventComponent
  },
  {
    path: "review",
    component:ReviewComponent
  },
  {
    path: "feature",
    component:FeatureComponent
  },
  {
    path: "opinion",
    component:OpinionComponent
  },
  {
    path: "sidebar",
    component: SidebarComponent 
  },
  {
    path: "article/:type/:id",
    component:ViewArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
