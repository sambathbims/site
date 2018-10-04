import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../services/article.service";
import { Article } from '../../model/article';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  articleList:Article[];

  show:boolean = true;

  constructor(private articleService:ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(article => {
      this.articleList = article;
    });
  }

}
