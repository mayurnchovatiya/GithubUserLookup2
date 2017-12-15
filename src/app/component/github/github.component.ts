import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../service/github.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user: any;
  repos: any;
  username: string;

  constructor(private ghService: GithubService) { }

  ngOnInit() {
    document.getElementById('githubFinder').addEventListener('click', () => {
      this.user = null;
      this.username = '';
    });
  }

  search() {
    if (!this.username) {
      this.user = null;
      return;
    }
    this.ghService.updateUsername(this.username);

    this.ghService.getUser()
      .subscribe(user => {
        this.user = user;
      });

    this.ghService.getRepos()
      .subscribe(repos => {
        this.repos = repos;
      });
  }



}
