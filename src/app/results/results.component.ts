import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatDailogComponent } from '../mat-dailog/mat-dailog.component';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  displayedColumns: string[] = ['name', 'description', 'owner'];
  dataSource!: MatTableDataSource<any> ;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(public dialog: MatDialog) {}

  setRepositories(repositories: any[]) {
    this.dataSource = new MatTableDataSource(repositories);
    this.dataSource.paginator = this.paginator;
  }
  openDialog(data: any) {
    const dialogRef = this.dialog.open(MatDailogComponent, {
      data: { myData: data }, width:'55vw'
    });
}
}

