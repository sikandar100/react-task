export interface IRocket {
  rocket_id: string;
  rocket_name: string;
  stages: number;
  type: "rocket";
  active: boolean;
  country: string;
  company: string;
  boosters: number;
  wikipedia: string;
  description: string;
  first_flight: string;
  flickr_images: string[];
  cost_per_launch: number;
  success_rate_pct: number;
  mass: {
    kg: number;
    lb: number;
  };
  height: {
    feet: number;
    meters: number;
  };
  diameter: {
    feet: number;
    meters: number;
  };
}
