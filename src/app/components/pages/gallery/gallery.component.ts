import { Component, OnInit } from '@angular/core';
import {
  ButtonsConfig,
  ButtonsStrategy,
  AdvancedLayout,
  GalleryService,
  Image,
  KS_DEFAULT_BTN_CLOSE,
  KS_DEFAULT_BTN_DELETE,
  KS_DEFAULT_BTN_DOWNLOAD,
  KS_DEFAULT_BTN_EXTURL,
  KS_DEFAULT_BTN_FULL_SCREEN,
  ButtonEvent,
  ButtonType,
  PlainGalleryConfig,
  PlainGalleryStrategy,
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public GalleryImage: Image[] = [
    new Image(
      1,
      { //modal
        img: '../../assets/img/media/1.jpg',
        title: '',
      }
    ),
    new Image(
      2,
      { //modal
        img: '../../assets/img/media/2.jpg',
        title: '',
      }
    ),
    new Image(
      3,
      { //modal
        img: '../../assets/img/media/3.jpg',
        title: '',
      }
    ),
    new Image(
      4,
      { //modal
        img: '../../assets/img/media/4.jpg',
        title: '',
      }
    ),
    new Image(
      5,
      { //modal
        img: '../../assets/img/media/5.jpg',
        title: '',
      }
    ),
    new Image(
      6,
      { //modal
        img: '../../assets/img/media/6.jpg',
        title: '',
      }
    ),
    new Image(
      7,
      { //modal
        img: '../../assets/img/media/7.jpg',
        title: '',
      }
    ),
    new Image(
      8,
      { //modal
        img: '../../assets/img/media/8.jpg',
        title: '',
      }
    ),
    new Image(
      9,
      { //modal
        img: '../../assets/img/media/9.jpg',
        title: '',
      }
    ),
    new Image(
      10,
      { //modal
        img: '../../assets/img/media/10.jpg',
        title: '',
      }
    ),
    new Image(
      11,
      { //modal
        img: '../../assets/img/media/11.jpg',
        title: '',
      }
    ),
    new Image(
      12,
      { //modal
        img: '../../assets/img/media/12.jpg',
        title: '',
      }
    ),
 
  ]

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
  }

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  }

  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };

  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };

  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };
  
  buttonsConfigCustom: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      KS_DEFAULT_BTN_FULL_SCREEN,
      KS_DEFAULT_BTN_DELETE,
      KS_DEFAULT_BTN_EXTURL,
      KS_DEFAULT_BTN_DOWNLOAD,
      KS_DEFAULT_BTN_CLOSE
    ]
  };

  
  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  openImageModalRowDescription(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.GalleryImage);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };

  onButtonBeforeHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.DELETE) {
      this.GalleryImage = this.GalleryImage.filter((val: Image) => event.image && val.id !== event.image.id);
    }
  }

  onButtonAfterHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }
  }

  onCustomButtonBeforeHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.CUSTOM) {
      this.addRandomImage();
      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.GalleryImage.length - 1);
      }, 0);
    }
  }

  onCustomButtonAfterHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }
  }

  addRandomImage() {
    const imageToCopy: Image = this.GalleryImage[Math.floor(Math.random() * this.GalleryImage.length)];
    const newImage: Image = new Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.GalleryImage = [...this.GalleryImage, newImage];
  }

}
