import { Component } from '@angular/core';
import { logo } from '../base64/logo.base64';
import { SunmiInnerPrinterService } from '../services/sunmi-inner-printer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private sunmi: SunmiInnerPrinterService) {}
  async print() {
    await this.sunmi.sunmiInnerPrinter.setAlignment(1);
    await this.sunmi.sunmiInnerPrinter.printBitmap(logo, 384, 384);
    await this.sunmi.sunmiInnerPrinter.printString("\n\n");
    await this.sunmi.sunmiInnerPrinter.setFontSize(100);
    await this.sunmi.sunmiInnerPrinter.printString('1234');
    await this.sunmi.sunmiInnerPrinter.setFontSize(30);
    await this.sunmi.sunmiInnerPrinter.printString("\n\n");
    await this.sunmi.sunmiInnerPrinter.printString("Department A - Sub Department - Service A");
    await this.sunmi.sunmiInnerPrinter.printString("\n\n");
    await this.sunmi.sunmiInnerPrinter.printQRCode("https://dor-e.com", 6, 3);
    await this.sunmi.sunmiInnerPrinter.printString("\n\n");
    await this.sunmi.sunmiInnerPrinter.printString("Scan the QR code to track your place in line");
    await this.sunmi.sunmiInnerPrinter.printString("\n\n");
    await this.sunmi.sunmiInnerPrinter.setFontSize(24);
    await this.sunmi.sunmiInnerPrinter.printString("Powered by dor-e.com");
    await this.sunmi.sunmiInnerPrinter.printString("\n");
    await this.sunmi.sunmiInnerPrinter.printString("29/08/2020 - 02:30 PM");
    await this.sunmi.sunmiInnerPrinter.printString("\n\n\n\n\n\n");

  }

}
