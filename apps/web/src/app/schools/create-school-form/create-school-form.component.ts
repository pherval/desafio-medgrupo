import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
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
  selector: 'app-create-school-form',
  templateUrl: './create-school-form.component.html',
  styleUrls: ['./create-school-form.component.scss'],
})
export class CreateSchoolFormComponent implements OnDestroy {
  @Output() create: EventEmitter<School>;

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

  constructor(
    private formBuilder: FormBuilder,
    private addressService: ZipcodeService
  ) {
    this.create = new EventEmitter();

    this.schoolForm = this.formBuilder.group({
      name: ['', Validators.required],
      cie: ['', Validators.required],
      address: this.formBuilder.group({
        zipcode: [''],
        street: [''],
        complement: [''],
      }),

      supervisor: ['', Validators.required],
      classes: this.formBuilder.array([]),
      contacts: this.formBuilder.group({
        phones: this.formBuilder.array([this.formBuilder.control('')]),
        email: ['', Validators.email],
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

    return control.invalid && control.touched;
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

  save() {
    if (this.schoolForm.valid) {
      this.create.emit({ ...this.schoolForm.value });
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
