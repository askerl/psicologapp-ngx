import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b>Alfredo Skerl</b> 2018</span>
    <div class="socials">
      <a href="https://www.linkedin.com/in/alfredo-skerl-43712254/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
