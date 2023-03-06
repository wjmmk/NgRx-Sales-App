import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from 'src/app/facades/auth.facade';
import { ILogin } from 'src/app/core/models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  loadingLogin$!: Observable<boolean>
  loginError$!: Observable<string | null>

  constructor( 
    private _fb: FormBuilder,
    private _authFacade: AuthFacade
  ) { 
    this.loadingLogin$ = this._authFacade.isLoading$
    this.loginError$ = this._authFacade.isError$
    this.loginForm = this._initForm()
  }

  ngOnInit(): void {
    this._initForm()
  }


  onSubmitForm(): void {
    if(this.loginForm.invalid) {
      console.log('Error')
      return
    }

    const data: ILogin = {...this.loginForm.value}
    //console.log(data)
    this._authFacade.login(data)
  }


  private _initForm(): FormGroup {
    return this._fb.group({
      identifier: [
        '',
        Validators.compose([Validators.required, Validators.email])
      ],
      password: ['', Validators.required]
    })
  }

}
