import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  // jp = 'assets/images/icon/japan.svg';
  // jp = 'assets/images/icon/japan.svg';
  // jp = 'assets/images/icon/japan.svg';

  constructor(private translate: TranslateService) {
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
