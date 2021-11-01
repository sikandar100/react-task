import { IRocket } from "./rocket.model";

export interface ILaunch {
  flight_number: number;
  mission_name: string;
  upcoming: false;
  launch_year: string;
  launch_date_utc: string;
  launch_date_unix: number;
  rocket: IRocket;
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  launch_success: boolean;
  launch_failure_details: {
    time: number;
    reason: string;
    altitude: number | null;
  };
  links: {
    mission_patch: string;
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
    youtube_id: string;
    flickr_images: string[];
  };
  details: string;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  timeline: {
    webcast_liftoff: number;
  };
}
