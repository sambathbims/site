import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../services/article.service";
import { Article } from '../../model/article';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})

export class AnalysisComponent implements OnInit {

  articleList:Article[];

  show:boolean = true;

  constructor(private articleService:ArticleService, private router:Router) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(article => {
      this.articleList = article;
    });
  }

  getIndividualArtile(id, type){
    this.router.navigate([`article/${type}/${id}`]);
  }

}
