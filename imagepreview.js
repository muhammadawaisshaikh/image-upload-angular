mgArea: string = 'https://i.ibb.co/z7nrQsn/047-Fly-High.png';
imageSrc: string;
  
  // read image onChange
  readURL(event: Event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }
