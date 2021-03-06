import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { BarcodeReaderPage } from "../barcode-reader/barcode-reader.page";
import { DepositWithdrawPage } from "../deposit-withdraw/deposit-withdraw.page";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([
			{
				path: "",
				component: HomePage
			}
		])
	],
	declarations: [HomePage, BarcodeReaderPage, DepositWithdrawPage]
})
export class HomePageModule {}
