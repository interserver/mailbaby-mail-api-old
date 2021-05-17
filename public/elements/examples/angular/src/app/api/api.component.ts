import { Component } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
})
export class ApiComponent {
  apiDescriptionUrl = 'https://raw.githubusercontent.com/interserver/mailbaby-api-spec/master/swagger.yaml';
  basePath = environment.basePath ? `${environment.basePath}/zoom-api` : 'zoom-api';
}
