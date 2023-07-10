import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.scss']
})
export class ReferComponent implements OnInit{
    ngOnInit(): void {
        
    }

    bonus: Number = 200
    d_month: String = 'Agust'
    d_day: Number = 23
    company_phone_number: string = '+44 7123 456789'
    company_site_address: string = 'hornsley-hitech.com'
    user_name: string = 'Tom'
    user_last_name: String = 'Curry'
}
