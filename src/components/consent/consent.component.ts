import {AfterViewChecked, ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ConsentDialogComponent} from "../dialogs/consent.dialog/consent.dialog.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrl: './consent.component.css',
  imports: [MatButtonModule, MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsentComponent implements AfterViewChecked {
  readonly dialog = inject(MatDialog);



  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  openDialog() {
    const dialogRef = this.dialog.open(ConsentDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngAfterViewChecked() {
    console.log("---Inside ngAfterViewChecked---");
    const dialogRef = this.dialog.open(ConsentDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      (result) ? console.log('show news') : window.location.href = 'https://radiomaryja.pl';
    });
  }

}
