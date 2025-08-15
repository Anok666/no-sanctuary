import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-consent.dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './consent.dialog.component.html',
  styleUrl: './consent.dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsentDialogComponent {}
