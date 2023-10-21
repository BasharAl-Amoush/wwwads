import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.css']
})
export class ModalEditUserComponent {
  @Input() userId !: string;

  @Input() isOpen: boolean = false;
  userForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      countryCode: ['', Validators.required],
      timeZone: ['', Validators.required],
      role: ['user']
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
        const formData = this.userForm.value;
        console.log(formData);
        this.closeModal();
    }
}
  closeModal() {
    this.isOpen = false;
  }

}
