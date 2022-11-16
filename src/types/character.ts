export interface IPropsCharacterItem {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: IPropOrigin;
  location?: IPropLocation;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
  favorites?: boolean;
}

interface IPropOrigin {
  name: string;
  url: string;
}

interface IPropLocation {
  name: string;
  url: string;
}

export interface IPropsLocationItem {
  id?: number;
  name?: string;
  type?: string;
  dimension: string;
  residents: string[];
  url?: string;
  created?: string;
}
