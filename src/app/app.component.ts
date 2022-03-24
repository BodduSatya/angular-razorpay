import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-razorpay';
  constructor(private appService: AppService) { }

  ngOnInit() { }

  options = {
    "key": "rzp_test_HTQz79bVMhpN4L", 
    "amount": "100", 
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://next.razorpay.com/build/browser/static/razorpay-logo-white.c637804f.svg",
    "order_id": "order_9A33XWu170gUtm", 
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
      "name": "Satya",
      "email": "bvvsnc3@gmail.com",
      "contact": "9999999999"
    },
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  rzp1: any;
  public initPay():void {
    this.options.order_id = "order_9A33XWu170gUtm";
    this.rzp1 = new this.appService.nativeWindow.Razorpay(this.options);
    //document.getElementById('rzp-button1').onclick = function(e){
    this.rzp1.open();
    // e.preventDefault();
    //}  
  }
}
