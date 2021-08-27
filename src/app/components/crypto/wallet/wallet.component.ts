import { Component, OnInit } from '@angular/core';
import { ClipboardService } from "ngx-clipboard";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  copy(text: string) {
    this._clipboardService.copy(text)
  }

  showSuccess() {
    this.toastr.success('Successfully Copied!');
  }

}
