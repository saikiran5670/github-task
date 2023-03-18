import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';



const modules= [
MatInputModule,
MatButtonModule,
MatTableModule,
MatDialogModule,
MatCardModule,
MatChipsModule,
MatPaginatorModule
];

@NgModule({
    imports: modules,
    exports: modules,
    declarations:[]
})
export class MaterialModule{}