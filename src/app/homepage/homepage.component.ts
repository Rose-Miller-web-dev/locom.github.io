import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor () {

  }

  ClipboardCopy(input:any) {
    input.select()
    document.execCommand('copy')
    input.setSelectRange(0,0)
  }

  remaining_purchase_days: Number = 180
  days_remaining: Number = 10
  paid_referrals: Number = 21
  current_referrals: Number = 132
  input_link: String = 'referral.com/link-vladlen'
  d_month: String = 'Agust'
  d_day: Number = 23
  bonus: Number = 200
  annual_reward: Number = 100    
}
