import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bin2Dec';
  form:FormGroup;
  decimalValue: Number = 0;

  constructor(public fb:FormBuilder) {
    this.form = this.fb.group({
      binaryNumber:[''],
      decimalNumber:['']
    });
  }

  ngOnInit() {

  }

  onlyBinary(evento:any) {
    return (evento.charCode >= 48 && evento.charCode <= 49);

  }

  convert(binValue:string) {
    let decimalValue = 0;
    decimalValue = this.conversionBinToDec(binValue, decimalValue);

    this.form.patchValue(
    {
      decimalNumber: decimalValue
    });
  }

  private conversionBinToDec(binValue: string, decimalValue: number) {
    for (let i = 0, j = binValue.length - 1; i < binValue.length && j >= 0; ++i, --j) {
      decimalValue += Number.parseInt(binValue[j]) * 2 ** i;
    }
    return decimalValue;
  }
}
