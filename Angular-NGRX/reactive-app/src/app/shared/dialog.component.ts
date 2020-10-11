import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog',
    template: `<h1>Are you sure?</h1>
        <mat-dialog-content>
            You have already reached {{data.progress}}
        </mat-dialog-content>
        <mat-dialog-actions>
            <button mat-button [mat-dialog-close]="true">Yes</button>
            <button mat-button [mat-dialog-close]="false">No</button>
        <mat-dialog-actions>
    `,
})
export class DialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    }
}
