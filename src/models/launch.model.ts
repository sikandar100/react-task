export interface ILaunch {
  links: {
    patch: {
      small: string;
      large: string;
    };
    flickr: {
      small: string[];
      original: string[];
    };
  };
  rocket: string;
  success: boolean;
  failures: {
    time: number;
    reason: string;
    altitude: number;
  }[];
  details: string;
  crew: {
    crew: string;
    role: string;
  }[];
  id: string;
  name: string;
  date_utc: string;
  date_unix: number;
  launchpad: string;
  upcoming: boolean;
}
