import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SunmiInnerPrinterService {
    public sunmiInnerPrinter: SunmiInnerPrinter;

    constructor() {
        const sunmiInnerPrinter = 'sunmiInnerPrinter';
        if (sunmiInnerPrinter in navigator) {
            this.sunmiInnerPrinter = navigator[sunmiInnerPrinter] as SunmiInnerPrinter;
        }
    }
}

export interface SunmiInnerPrinter {
    getPrintedLength: () => Promise<any>;
    getPrinterSerialNo: () => Promise<any>;
    getPrinterVersion: () => Promise<any>;
    hasPrinter: () => Promise<0|1>;
    lineWrap: (count: number) => Promise<any>;
    printBarCode: (barCodeData, symbology, width, height, textPosition) => Promise<any>;
    printBitmap:  (base64Data, width, height) => Promise<any>;
    printColumnsText: (colsTextArr, colsWidthArr, colsAlign) => Promise<any>;
    printOriginalText: (text: string) => Promise<any>;
    printQRCode: (qrCodeData, moduleSize, errorLevel)  => Promise<any>;
    printString: (text: string) => Promise<any>;
    printTextWithFont: (text: string, typeface: string, fontSize: number)  => Promise<any>;
    printerInit: ()  => Promise<any>;
    printerSelfChecking: ()  => Promise<any>;
    printerStatusStartListener:  (onSuccess: () => void, onError: () => void)  => Promise<any>;
    printerStatusStopListener: () => Promise<any>;
    sendRAWData: (base64Data: string) => Promise<any>;
    setAlignment: (alignment: 0 | 1 | 2) => Promise<any>; // 0 Left, 1 Center, 2 Right
    setFontName: (typeface: string) => Promise<any>;
    setFontSize: (fontSize: number) => Promise<any>;
  }

export enum SunmiTypeFaces {

}