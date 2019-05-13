export interface IAccount {
  avatar: IGravatar;
  id: number;
  include_adult: boolean;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  username: string;
}

export interface IGravatar {
  gravatar: IHash;
}

export interface IHash {
  hash: string;
}
