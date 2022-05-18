import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  @Input() placeholder: string = '';
  @Output() type = new EventEmitter<string>();
  @Output() clear = new EventEmitter<void>();

  faClose = faClose;
  faSearch = faSearch;
}
