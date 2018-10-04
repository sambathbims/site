import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../services/article.service";
import { Article } from '../../model/article';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

  articleList:Article[];

  show:boolean = true;

  constructor(private articleService:ArticleService, private router:Router) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(article => {
      this.articleList = article;
    });
  }

  getArticle(id, type){
    this.router.navigate([`article/${type}/${id}`]);
  }
}
