import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from "../services/login.services";

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  hide = true;
  public loginname: string = "testadmin";
  public username: string = "";
  public password: string = "";
  constructor(private router: Router, private services: LoginService) {

    let key = CryptoJS.enc.Utf8.parse('7061737323313233');
    let iv = CryptoJS.enc.Utf8.parse('7061737323313233');
    let encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse("testadmin"), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

    let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    console.log('Encrypted :' + encrypted);
    console.log('Key :' + encrypted.key);
    console.log('Salt :' + encrypted.salt);
    console.log('iv :' + encrypted.iv);
    console.log('Decrypted : ' + decrypted);
    console.log('utf8 = ' + decrypted.toString(CryptoJS.enc.Utf8));


  }


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  // password = new FormControl('', [Validators.required]);
  gotoDashboard() {
    console.log("inside")
    this.router.navigateByUrl('Dashboard');
  }
  login() {
    console.log("login 1");
    this.services.login("cm.pty.agent", "Pss@test17").
      subscribe(
      (response) => 
        console.log(response),
      (error) => console.log(error));
  }
}
