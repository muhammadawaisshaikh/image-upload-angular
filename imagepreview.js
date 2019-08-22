mgArea: string = 'https://i.ibb.co/z7nrQsn/047-Fly-High.png';
imageSrc: string;
  
  // read image onChange Javascript
  readURL(event: Event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }

// read image onChange Typerscript
  readURL(event: Event): void {
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {
      const file = (<HTMLInputElement>event.target).files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result as string;

      reader.readAsDataURL(file);
    }
  }
