export interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface DesertItem {
  image: Image;
  name: string;
  category: string;
  price: number;
}