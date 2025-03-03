import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  studentData: any = {
    name: 'Anmol Manni',
    studentNumber: '101567899',
    photos: [
      { src: 'assets/images/River.jpg', caption: 'River' },
      { src: 'assets/images/Tree.jpg', caption: 'Tree' },
      { src: 'assets/images/sunset.jpg', caption: 'sunset' },
      { src: 'assets/images/Desert.jpg', caption: 'Desert' },
      { src: 'assets/images/beachUmbrella.jpg', caption: 'beachUmbrella' },
      { src: 'assets/images/Forest.jpg', caption: 'Forest' },
      { src: 'assets/images/boat.jpeg', caption: 'boat' },
      { src: 'assets/images/beach.jpg', caption: 'beach' },
      { src: 'assets/images/mountain.jpg', caption: 'mountain' },
      { src: 'assets/images/waterfall.jpg', caption: 'Waterfall' },
    ],
  }
  activeImageIndex: number = 0;

  setActiveImage(index: number) {
    this.activeImageIndex = index;
  }
  nextImage() {
    if (this.activeImageIndex < this.studentData.photos.length - 1) {
      this.activeImageIndex++;
    }
  }
  
  prevImage() {
    if (this.activeImageIndex > 0) {
      this.activeImageIndex--;
    }
  }
    
}
