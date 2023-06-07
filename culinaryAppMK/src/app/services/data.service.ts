import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://localhost:3001";
  private token = this.authService.getToken();

  constructor(private http: HttpClient, public authService: AuthService) { }

  getAll() {
    return this.http.get(this.url + '/api/posts');
  }

  getById(id: string) {
    return this.http.get(this.url + '/api/post/' + id);
  }

  createPost(credentials: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.token,
      'Content-Type': 'application/json'})
    return this.http.post(this.url + '/api/posts', credentials, {headers: headers});
  }

  deletePost(id: string) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.token,
      'Content-Type': 'application/json'})
    return this.http.delete(this.url + '/api/post/' + id, {headers: headers});
  }

  updatePost(credentials: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.token,
      'Content-Type': 'application/json'})
    return this.http.put(this.url + '/api/post', credentials, {headers: headers});
  }

  likeRecipe(userId: string, recipeId: string) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.token,
      'Content-Type': 'application/json'})
    const url = this.url + `/api/users/${userId}`;
    const requestBody = { recipeId: recipeId };

    return this.http.post(url, requestBody, {headers: headers});
  }

  getLikedRecipes(userId: string) {
    const url = this.url + '/api/user/likedRecipes/'+userId;
    return this.http.get(url);
  }
}
