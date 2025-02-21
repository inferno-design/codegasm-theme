import type { OnDestroy, OnInit } from '@angular/core'
import type { ActivatedRoute } from '@angular/router'
import type { Subscription } from 'rxjs'
import type { Person, SearchService } from '../shared'
import { Component } from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  query: string
  searchResults: Array<Person>
  sub: Subscription

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      if (params.term) {
        this.query = decodeURIComponent(params.term)
        this.search()
      }
    })
  }

  search(): void {
    this.searchService.search(this.query).subscribe(
      (data: any) => {
        this.searchResults = data
      },
      (error) => console.log(error),
    )
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }
}
