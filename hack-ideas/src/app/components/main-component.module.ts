import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrimaryHeaderComponent} from './primary-header/primary-header.component';
import {PrimaryFooterComponent} from './primary-footer/primary-footer.component';


@NgModule({
  declarations: [PrimaryHeaderComponent, PrimaryFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [PrimaryHeaderComponent, PrimaryFooterComponent],
})
export class MainComponentModule {
}
