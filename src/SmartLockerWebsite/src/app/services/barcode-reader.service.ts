import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class BarcodeReaderService {
	barcodeScanned: boolean = false;
	studentNummer: string;
	constructor() { }

	studentNummerFilter(unfilterdBarcode: string) {
		if (unfilterdBarcode.length > 16) {
			unfilterdBarcode = unfilterdBarcode.substring(16, 32);
		}
		let prefix = "]C1S0000";
		let prefixBarcode = unfilterdBarcode.substring(0, 8);
		if (prefix == prefixBarcode) {
			console.log("Studentenkaart van ap");
			let snummer = unfilterdBarcode.substring(8, 14);
			this.barcodeScanned = true;
			this.studentNummer = snummer;
			return snummer;
		} else {
			console.log("Geen studentenkaart van ap");
			return "";
		}
	}

	Clean() {
		this.barcodeScanned = false;
		this.studentNummer = "";
	}
}
