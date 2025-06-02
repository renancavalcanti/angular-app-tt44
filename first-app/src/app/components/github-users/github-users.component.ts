import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-github-users',
  imports: [FormsModule, CommonModule],
  templateUrl: './github-users.component.html',
  styleUrl: './github-users.component.scss'
})
export class GithubUsersComponent {

  username = '';
  userData: any = null
  isLoading = false
  errorMessage = ''
  catFact = ''
  
  constructor(private gitHubService: GithubService){
    this.gitHubService.getCatFact().subscribe({
      next: (data) => {
        this.catFact = data.data[0]
        console.log(this.catFact)
      },
      error: () => {  
        this.errorMessage = "User pas trouve!"
        this.userData = null
      }
    });
  }

  searchUser(): void {
    this.gitHubService.getUser(this.username).subscribe({
      next: (data) => {
        this.userData = data
        this.errorMessage = ''
      },
      error: () => {  
        this.errorMessage = "User pas trouve!"
        this.userData = null
      }
    });
  }
}
