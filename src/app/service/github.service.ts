import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username = '';

    constructor(private http: Http) {
        console.log('github service');
    }

    getUser() {
        return this.http.get('https://api.github.com/users/' + this.username)
        .map(res => res.json());
    }

    getRepos() {
        return this.http.get('https://api.github.com/users/' + this.username + '/repos')
        .map(res => res.json());
    }

    updateUsername(username: string) {
        this.username = username;
    }
}