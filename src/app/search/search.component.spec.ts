import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { IResponse } from '../models/interface.model';
import { SearchService } from '../services/search.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
	let component: SearchComponent;
	let fixture: ComponentFixture<SearchComponent>;

	const searchSpy = jasmine.createSpyObj('SearchService', ['getSearchResults']);
	searchSpy.getSearchResults.and.returnValue(of({
		hits: [
			{ title: 'test1', url: 'www.test1.com' },
			{ title: 'test2', url: 'www.test2.com' },
			{ title: 'test3', url: 'www.test3.com' }
		],
		nbHits: 3,
		nbPages: 1
	}));

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule, ReactiveFormsModule],
			providers: [{ provide: SearchService, useValue: searchSpy }],
			declarations: [SearchComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();

		fixture = TestBed.createComponent(SearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('be able to retrieve data from the API via GET', () => {
		searchSpy.getSearchResults().subscribe((result: IResponse) => {
			expect(result.hits.length).toBe(3);
		})
	});

	it('when searching current page displayed should be 1', () => {
		component.searchWord();
		expect(component.currentPage).toBe(1);
	});

	it('on next page the current page displayed should be 2', () => {
		component.searchWord();
		component.nextPage();
		expect(component.currentPage).toBe(2);
	});

});
