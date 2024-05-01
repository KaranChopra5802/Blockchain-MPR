import { Component, OnInit, effect } from '@angular/core';
import { BlockchainService } from 'src/services/blockchain.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.sass']
})
export class DashboardHomeComponent implements OnInit {

  

  accountBalance: any;

  constructor(blockchainService: BlockchainService) {
    effect(() => {

      this.accountBalance = blockchainService.balance()
      console.log(this.accountBalance);

    })
  }

  ngOnInit(): void {

  }





}
