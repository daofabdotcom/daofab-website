import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daofab';
  email: any;
  error: any;
  submitted = false;

  constructor(private http: HttpClient) { }

  subcribe() {
    // const params = new HttpParams()
    //   .set('email', this.email);
    if (this.email) {
      const url = 'https://daofab.us17.list-manage.com/subscribe/post-json?u=4895a97c722bbb88e2672fd4e&amp;id=af595c3f11&email='
        + this.email;
      this.http.jsonp(url,
        'c').subscribe((res: any) => {
          console.log(res.result);
          if (res.result && res.result !== 'error') {
            alert('Thank you for subscribing to our mailing list.');
          } else {
            alert(res.msg);
            this.error = res.msg;
          }
        }, error => {
          console.log(JSON.stringify(error));
          this.error = error;
        });
    }

  }

  partner() {
    window.location.assign('mailto:info@daofab.com?subject=Partner with DAOFAB&body=Partner with DAOFAB');
  }

}
