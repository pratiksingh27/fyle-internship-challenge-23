import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
})
export class GithubReposComponent implements OnInit {
    @Input() githubRepos!: any[];
    startIndex: number = 0;
  
    constructor() { }
  
    ngOnInit(): void {
      console.log('Received github repos:', this.githubRepos);
    }
  
    nextPage() {
      this.startIndex += 10;
    }
  
    prevPage() {
      this.startIndex -= 10;
    }
}
