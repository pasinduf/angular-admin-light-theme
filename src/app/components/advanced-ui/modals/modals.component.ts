import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
  ) {
    const datePickerConfig = {
      firstDayOfWeek: 'su',
      monthFormat: 'MMM, YYYY',
      disableKeypress: false,
      allowMultiSelect: false,
      closeOnSelect: undefined,
      closeOnSelectDelay: 100,
      onOpenDelay: 0,
      weekDayFormat: 'ddd',
      appendTo: document.body,
      drops: 'down',
      opens: 'right',
      showNearMonthDays: true,
      showWeekNumbers: false,
      enableMonthSelector: true,
      format: "YYYY-MM-DD HH:mm",
      yearFormat: 'YYYY',
      showGoToCurrent: true,
      dayBtnFormat: 'DD',
      monthBtnFormat: 'MMM',
      hours12Format: 'hh',
      hours24Format: 'HH',
      meridiemFormat: 'A',
      minutesFormat: 'mm',
      minutesInterval: 1,
      secondsFormat: 'ss',
      secondsInterval: 1,
      showSeconds: false,
      showTwentyFourHours: true,
      timeSeparator: ':',
      multipleYearsNavigateBy: 10,
      showMultipleYearsNavigation: false,
    }
  }

  ngOnInit(): void {
  }

  BasicOpen(basicmodal) {
    this.modalService.open(basicmodal);
  }
  SmallOpen(smallmodal) {
    this.modalService.open(smallmodal, { size: 'sm' });
  }
  LargeOpen(largemodal) {
    this.modalService.open(largemodal, { size: 'lg' });
  }
  GridOpen(gridmodal) {
    this.modalService.open(gridmodal, { size: 'lg' });
  }

  SuccessOpen(successmodal) {
    this.modalService.open(successmodal, { centered: true });
  }
  WarningOpen(warningmodal) {
    this.modalService.open(warningmodal, { centered: true });
  }

  openScrollableContent(scrolling) {
    this.modalService.open(scrolling, { scrollable: true });
  }

  Select2Open(select2modal) {
    this.modalService.open(select2modal);
  }
  DatePickerOpen(datepickermodal) {
    this.modalService.open(datepickermodal);
  }

}
