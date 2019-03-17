export interface IHotel {
  id: number;
  title: string;
  address: string;
  description: string;
  phone: string;
  picture: string;
  photos: Array<string>;
  weather: IWeather;
  profile: IProfile;
  stars: Stars;
}

export interface IProfile {
  followers: number;
  following: number;
  photo: string;
}

export interface IWeather {
  temperature: number;
  wind: number;
  icon: string;
}

export type Stars = 1 | 2 | 3 | 4 | 5;
