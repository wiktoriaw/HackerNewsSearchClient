import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';
import { IResponse } from '../models/interface.model';
import { SearchService } from '../services/search.service';


@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	result!: IResponse;
	pageNo = 0;
	currentPage = 1;

	searchForm = new FormGroup({
		search: new FormControl('')
	});

	get search() { return this.searchForm.get('search') }
	get isPrevButtonDisabled() { return this.currentPage === 1 }
	get isNextButtonDisabled() { return this.currentPage === this.result?.nbPages || this.result?.nbPages === 0}

	constructor(private searchService: SearchService) { }

	ngOnInit(): void {
		this.search?.valueChanges.pipe(
			debounceTime(500)
		).subscribe(() => this.searchWord());
	}

	getSearchResult() {
		return this.searchService.getSearchResults(this.search?.value, this.pageNo).subscribe((data: IResponse) => {
			this.result = data;
		});
	}

	searchWord(): void {
		this.pageNo = 0;
		this.currentPage = 1;
		this.getSearchResult();
	}

	nextPage() {
		this.pageNo++;
		this.currentPage++;
		this.getSearchResult();
	}

	prevPage() {
		this.pageNo--;
		this.currentPage--;
		this.getSearchResult();
	}

}
