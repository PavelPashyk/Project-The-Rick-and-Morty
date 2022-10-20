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
}

interface IPropOrigin {
  name: string;
  url: string;
}

interface IPropLocation {
  name: string;
  url: string;
}
