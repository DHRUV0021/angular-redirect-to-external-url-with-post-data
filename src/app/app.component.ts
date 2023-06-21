import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postAndRedirect() {
    const data = {
      key: '57d9d47d-f205-4f2a-8f3a-a08c5197824z',
      admissionNo: 'AF0846'
    }

    var formData: any = new FormData();
    formData.append("key", "57d9d47d-f205-4f2a-8f3a-a08c5197824z");
    formData.append("admissionNo", "AF0846");


    // const targetUrl = 'https://swaadhyayan.com/school/ErpController/erplogin/student';

    const myform = document.createElement('form');
    const mapInput = document.createElement('input');
    mapInput.type = 'hidden';
    mapInput.name = 'key';
    mapInput.value = '57d9d47d-f205-4f2a-8f3a-a08c5197824z';
    myform.appendChild(mapInput);

    const mapInput1 = document.createElement('input');
    mapInput1.type = 'hidden';
    mapInput1.name = 'admissionNo';
    mapInput1.value = 'AF0846';
    myform.appendChild(mapInput1);


    myform.method = 'POST';
    myform.action = "https://swaadhyayan.com/school/ErpController/erplogin/student";
    myform.style.display = 'none';
    myform.append('Content-Type', 'application/x-www-form-urlencoded');
    myform.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8');
    document.body.appendChild(myform);
    myform.submit();

  }
}
