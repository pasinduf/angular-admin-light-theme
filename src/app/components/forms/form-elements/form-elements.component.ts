import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LabelType, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  toggleClass = "on";
  public color1: string = '#2889e9';
  public color2: string = '#e920e9';
  selectedDate ;
  model: NgbDateStruct;
  datePickerConfig

  //range slider
  defvalue: number = 10;
  minValue: number = 100;
  maxValue: number = 550;
  $minValue: number = 200;
  $maxValue: number = 800;
  negValue: number = -500;
  posValue: number = 500;
  constructor() { }

  ngOnInit(): void {
    this.datePickerConfig = {
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
      format: "MM-DD-YYYY",
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

  @ViewChild('labelImport')
  labelImport: ElementRef;

  fileToUpload: File = null;
  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(',');
    this.fileToUpload = files.item(0);
  }

  status: boolean = false;
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
  clickEvent1() {
    this.status1 = !this.status1;
  }
  clickEvent2() {
    this.status2 = !this.status2;
  }
  clickEvent3() {
    this.status3 = !this.status3;
  }

  //range Slider
  DefaultSliderOptions: Options = {
    floor: 10,
    ceil: 100,
    showSelectionBar: true
  }
  customSlider1: Options = {
    floor: 100,
    ceil: 1000
  }
  customSlider2: Options = {
    floor:0,
    ceil: 1000,
    translate: (value: number): string => {
      return '$' + value;
    },
    step: 500,
    showTicks: true,
    stepsArray: [
      { value: 0, legend: "0" },
      { value: 50},
      { value: 100 },
      { value: 150},
      { value: 200 },
      { value: 250, legend: "250"},
      { value: 300 },
      { value: 350},
      { value: 400 },
      { value: 450},
      { value: 500, legend: "500" },
      { value: 550},
      { value: 600 },
      { value: 650},
      { value: 700 },
      { value: 750 , legend: "750"},
      { value: 800 },
      { value: 850},
      { value: 900 },
      { value: 950},
      { value: 1000, legend: "1000" },
    ]
  }
  customSlider3: Options = {
    floor: -1000,
    ceil: 1000,
    step: 100,
    showTicks: true,
    stepsArray: [
      { value: -1000, legend: "-1000" },
      { value: -900 },
      { value: -800 },
      { value: -700 },
      { value: -600 },
      { value: -500, legend: "-500" },
      { value: -400 },
      { value: -300 },
      { value: -200 },
      { value: -100 },
      { value: 0, legend: "0" },
      { value: 100 },
      { value: 200 },
      { value: 300 },
      { value: 400 },
      { value: 500, legend: "500" },
      { value: 600 },
      { value: 700 },
      { value: 800 },
      { value: 900 },
      { value: 1000, legend: "1000" },
    ]
  }


}
