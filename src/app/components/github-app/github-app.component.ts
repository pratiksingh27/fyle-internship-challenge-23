import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
})
export class GithubAppComponent {
  public githubUserQuery!: string;
  public githubProfile: any;
  public githubRepos!: any[];
  public errorMessage!: string;
constructor(private githubService: ApiService) {}

  public searchUser() {
    // to get the github profile
    this.githubService.getUser(this.githubUserQuery).subscribe(
      (data: any) => {
        this.githubProfile = data;
      },
      (error: string) => {
        this.errorMessage = error;
      }
    );

    // get the github repos
    this.githubService.getRepos(this.githubUserQuery).subscribe(
        (data: any[]) => {
            this.githubRepos = data;
        },
        (error: any) => {
            this.errorMessage = error;
        }
    );
  }
}
