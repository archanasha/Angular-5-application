import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LiveTrainingComponent } from './live-training/live-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';

@NgModule({
    declarations: [
        TrainingComponent,
        LiveTrainingComponent,
        PastTrainingComponent,
        NewTrainingComponent,
    ],
    imports: [
        SharedModule,
        TrainingRoutingModule
    ],
    exports: [],
})
export class TrainingModule { }