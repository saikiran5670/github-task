import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccessRepo } from '../access-repo.service';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.scss']
})
export class RepoSearchComponent {
  query: string = '';
  @ViewChild(ResultsComponent, { static: false })
results!: ResultsComponent;
  resultsRetrived!: boolean;
  errorPart!: boolean;

  constructor(private githubDetails: AccessRepo) {}

  search() {
    this.githubDetails.searchRepositories(this.query).subscribe((response: any) => {
      if(response){
        this.resultsRetrived = true;
        this.errorPart = true
        this.results?.setRepositories(response.items);
      }
      else{
        this.errorPart = false
      }
  });
}
}

