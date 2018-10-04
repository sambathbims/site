import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Article } from '../model/article';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleUrl:any = "https://www.the-sam.site/articles";

  constructor(private http:HttpClient) { }

  getArticles():Observable<Article[]>{
    return this.http.get<Article[]>(this.articleUrl);
  }

  getCurrentArticle(id){
    return this.http.get('https://www.the-sam.site/articles/' + id)
  }
}
