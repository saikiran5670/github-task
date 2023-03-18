import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessRepo {
  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  searchRepositories(query: string) {
    const url = `${this.baseUrl}/search/repositories?q=${query}`;
    return this.http.get(url);
  }

  getContributors(owner: string, repo: string) {
    const url = `${this.baseUrl}/repos/${owner}/${repo}/contributors`;
    return this.http.get(url);
  }
}
