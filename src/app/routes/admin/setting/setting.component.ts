import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  imgUrl = 'assets/images/zoro.png';
  jp = 'assets/images/icon/japan.svg';
  en = 'assets/images/icon/uk.svg';
  vi = 'assets/images/icon/vi.svg';

  constructor(private translate: TranslateService, private router: Router) {
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  public save() {
    this.router.navigate(['admin', 'overview'])
  }

  ngOnInit() {
  }

}
