export interface Game {
  background_image: string;
  id: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres:Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  screenshorts: Array<Screenshorts>;
  trailers: Array<Trailer>;
}

export interface APIResponse<T> {
    results: Array<T>;
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    slug: string;
  };
}

interface Publishers {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;

}

interface Screenshorts {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}

