import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css'
})
export class BreadcrumbsComponent {

  @Input("parentLink") parentLinkProps = ""
  @Input("currentLink") currentLinkProps = ""

}
