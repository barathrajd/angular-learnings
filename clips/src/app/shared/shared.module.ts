import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabComponent } from './tab/tab.component';
// import { ModalService } from '../services/modal.service';

@NgModule({
  declarations: [ModalComponent, TabContainerComponent, TabComponent],
  imports: [CommonModule],
  exports: [ModalComponent, TabComponent, TabContainerComponent],
  // Shared Module service injection
  // providers: [ModalService],
})
export class SharedModule {}
