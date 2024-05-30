import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HikerService } from '../../services/hiker.service';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';
// import { HikerService } from 'src/app/services/hiker.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private hikerService: HikerService) {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(1)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordsMatch });
  }

  passwordsMatch(group: FormGroup) {
    const newPassword = group.get('newPassword').value;
    const confirmPassword = group.get('confirmPassword').value;
    return newPassword === confirmPassword ? null : { passwordsMismatch: true };
  }

  updateEmail() {
    const email = this.profileForm.get('email').value;
    const userId = UserStorageService.getUserId();
    this.hikerService.updateEmail(userId, email).subscribe(
      response => {
        console.log('Email updated successfully', response);
      },
      error => {
        console.error('Error updating email', error);
      }
    );
  }

  updatePassword() {
    const oldPassword = this.profileForm.get('oldPassword').value;
    const newPassword = this.profileForm.get('newPassword').value;
    const userId = UserStorageService.getUserId();
    this.hikerService.updatePassword(userId, oldPassword, newPassword).subscribe(
      response => {
        console.log('Password updated successfully', response);
      },
      error => {
        console.error('Error updating password', error);
      }
    );
  }
}
