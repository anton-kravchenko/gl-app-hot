export interface IHotel {
  id: number;
  title: string;
  address: string;
  description: string;
  phone: string;
  picture: string;
  photos: Array<string>;
  weather: {
    temperature: number;
    wind: number;
    icon: string;
  };
  profile: {
    followers: number;
    following: number;
    photo: string;
  };
  stars: 1 | 2 | 3 | 4 | 5;
}
