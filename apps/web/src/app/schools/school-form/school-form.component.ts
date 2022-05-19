import {
  Component,
  Output,
  EventEmitter,
  OnDestroy,
  Input,
} from '@angular/core';
import {
  FormBuilder,
  type FormGroup,
  type FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  faAddressBook,
  faClose,
  faEnvelope,
  faMap,
  faPeopleCarry,
  faPersonChalkboard,
  faPhone,
  faPlus,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { ZipcodeService } from 'src/app/shared/zipcode.service';
import { type School } from '../schools.service';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.scss'],
})
export class SchoolFormComponent implements OnDestroy {
  @Input() school?: School;
  @Output() save: EventEmitter<School>;

  faMap = faMap;
  faPlus = faPlus;
  faClose = faClose;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faPeopleCarry = faPeopleCarry;
  faSchool = faSchool;
  faAddressBook = faAddressBook;
  faPersonChalkboard = faPersonChalkboard;

  schoolForm: FormGroup;

  addressSubscription?: Subscription;

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private addressService: ZipcodeService
  ) {
    this.save = new EventEmitter();

    this.schoolForm = this.formBuilder.group({
      name: [this.school?.name, Validators.required],
      cie: [this.school?.cie, Validators.required],
      address: this.formBuilder.group({
        zipcode: [this.school?.address?.zipCode],
        street: [this.school?.address?.street],
        complement: [this.school?.address?.complement],
      }),

      supervisor: [this.school?.supervisor, Validators.required],
      classes: this.formBuilder.array([]),
      contacts: this.formBuilder.group({
        phones: this.formBuilder.array([this.formBuilder.control('')]),
        email: [this.school?.contacts?.email, Validators.email],
      }),
    });
  }

  get phones(): FormArray {
    return this.schoolForm.get('contacts.phones') as FormArray;
  }

  get zipcode(): FormControl {
    return this.schoolForm.get('address.zipcode') as FormControl;
  }

  hasError(path: string | (string | number)[]): boolean {
    const control = this.schoolForm.get(path);
    if (!control) return false;

    return control.invalid && (control.touched || this.submitted);
  }

  getPhone(index: number): FormControl {
    return (this.schoolForm.get('contacts.phones') as FormArray).at(
      index
    ) as FormControl;
  }

  addPhone() {
    return this.phones.push(this.formBuilder.control(''));
  }

  removePhone(index: number) {
    return this.phones.removeAt(index);
  }

  handleSave(e: SubmitEvent) {
    e.preventDefault();

    this.submitted = true;

    if (this.schoolForm.valid) {
      this.save.emit({ ...this.schoolForm.value });
      this.clear();
    }
  }

  clear() {
    this.schoolForm.reset();
  }

  searchZipcode() {
    this.addressSubscription = this.addressService
      .search(this.zipcode.value)
      .subscribe(({ code: zipcode, address: street }) => {
        this.schoolForm.patchValue({
          address: {
            zipcode: zipcode || this.zipcode.value,
            street,
          },
        });
      });
  }

  ngOnDestroy() {
    this.addressSubscription?.unsubscribe();
  }
}
