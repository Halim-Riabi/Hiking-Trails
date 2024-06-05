import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HikerService } from '../../services/hiker.service';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';
import { AgencyService } from '../../services/agency.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileForm: FormGroup;
  successMessage: string;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private agencyService: AgencyService,
    private userStorageService: UserStorageService
  ) {
    this.profileForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordsMatch });
  }

  passwordsMatch(group: FormGroup) {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { passwordsMismatch: true };
  }

  updatePassword() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.profileForm.invalid) {
      this.errorMessage = 'Form is invalid';
      return;
    }

    const oldPassword = this.profileForm.get('oldPassword')?.value;
    const newPassword = this.profileForm.get('newPassword')?.value;
    // const userId = this.userStorageService.getUserId();
    const userId = UserStorageService.getUserId();

    if (oldPassword && newPassword && userId) {
      this.agencyService.updatePassword(userId, oldPassword, newPassword).subscribe(
        response => {
          this.successMessage = 'Password updated successfully';
          console.log('Password updated successfully', response);
        },
        error => {
          this.errorMessage = 'Error updating password';
          console.error('Error updating password', error);
        }
      );
    } else {
      this.errorMessage = 'Invalid form values';
    }
  }
}
