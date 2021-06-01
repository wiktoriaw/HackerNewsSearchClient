import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { SearchComponent } from './search/search.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider'
import { SearchService } from './services/search.service';

@NgModule({
	declarations: [
		AppComponent,
		SearchComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatInputModule,
		MatIconModule,
		MatCardModule,
		MatPaginatorModule,
		MatButtonModule,
		MatListModule,
		MatDividerModule
	],
	providers: [SearchService],
	bootstrap: [AppComponent]
})
export class AppModule { }
