import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.css']
})
export class ModalAddUserComponent {

  @Input() title: string = 'Modal';
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
