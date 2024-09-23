import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormArray} from '@angular/forms';
import { UserDataService } from '../Services/user-data.service';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  public result:any;
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    
  });

  constructor(private formBuilder: FormBuilder, private userData: UserDataService) {}


  onSubmit() {
    
    // TODO: Use EventEmitter with form value
    let ret = this.userData.getUser(this.profileForm).subscribe((data)=>{
      console.log('on submit ' + JSON.stringify(data));
      this.result = JSON.stringify(data); 
    })
    //alert(ret);
    console.warn('in submit ' + this.profileForm.value);
  }
}
