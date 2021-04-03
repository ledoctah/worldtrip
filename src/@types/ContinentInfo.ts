import City from './City';

export default interface ContinentInfo {
  id: number;
  name: string;
  photo_url: string;
  description: string;
  continentId: number;
  countries_count: number;
  languages_count: number;
  cities_count: number;
  cities: Array<City>;
}
