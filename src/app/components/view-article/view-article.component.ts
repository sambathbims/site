import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  article:any;

  constructor(private activatedRouter:ActivatedRoute, private articleService:ArticleService) { }

  ngOnInit() {
    const currentArticle = this.activatedRouter.snapshot.params['id'];
    this.articleService.getCurrentArticle(currentArticle).subscribe(article=>{
      this.article = article;
    });
    
  }

}
