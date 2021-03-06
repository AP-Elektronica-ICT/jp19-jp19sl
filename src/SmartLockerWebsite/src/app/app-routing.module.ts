import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "home", loadChildren: "./home/home.module#HomePageModule" },
	{
		path: "barcode-reader",
		loadChildren:
			"./barcode-reader/barcode-reader.module#BarcodeReaderPageModule"
	},
	{
		path: "deposit-withdraw",
		loadChildren:
			"./deposit-withdraw/deposit-withdraw.module#DepositWithdrawPageModule"
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
