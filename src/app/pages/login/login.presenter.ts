import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginEmailErrorControl, LoginPasswordErrorControl } from './commons/constants/errors';

@Injectable({
    providedIn: 'root'
})
export class LoginPresenter {
    form: FormGroup;
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required, Validators.minLength(8)])
    emailErrorControl = LoginEmailErrorControl;
    passwordErrorControl = LoginPasswordErrorControl;

    constructor() {
        this.form = new FormGroup(
            {
                email: this.email,
                password: this.password
            }
        );
    }

    getErrorKey(input: string): string {
        const errors = this.form.get(input)?.errors;
        
        if(!errors) {
            return '';
        }

        const errorsKey = Object.keys(errors);
        
        return errorsKey[0] || '';
    }


    getError(input: string) {
        const errorSettings = {
            email : this.emailErrorControl,
            password: this.passwordErrorControl
        }
        const key = this.getErrorKey(input);
        const error = errorSettings[input][key];
        return error;
    }
}