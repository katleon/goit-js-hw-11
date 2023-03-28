'use strict';

class PhotosAPI {
  static BASE_URL = 'https://pixabay.com/api/';
  static API_KEY = '34758535-d12bd0a3bf33d5441727ade7e';
  pageToFetch = 1;
  constructor(searchword = '') {
    this.searchword = searchword;
  }
  async fetchPhotos() {
    const params = new URLSearchParams({
      q: this.searchword,
      per_page: 50,
      page: this.pageToFetch,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const result = await fetch(`${BASE_URL}?key=${API_KEY}&${params}`);
    return result.ok ? result.json() : Promise.reject(result.statusText);
  }

  resetPage() {
    this.pageToFetch = 0;
    console.log('launched class metod resetPage {this.pageToFetch=0}');
  }

  get searchword() {
    return this.searchword;
  }
  set searchword(value) {
    this.searchword = value;
  }
}

export { PhotoAPI };
