/**
 * This file was @generated using pocketbase-typegen
 */

import type PocketBase from "pocketbase";
import type { RecordService } from "pocketbase";

export enum Collections {
  Monsters = "monsters",
  PokerRoom = "pokerRoom",
  PokerUser = "pokerUser",
  PokerVote = "pokerVote",
  Posts = "posts",
  Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// System fields
export type BaseSystemFields<T = never> = {
  id: RecordIdString;
  created: IsoDateString;
  updated: IsoDateString;
  collectionId: string;
  collectionName: Collections;
  expand?: T;
};

export type AuthSystemFields<T = never> = {
  email: string;
  emailVisibility: boolean;
  username: string;
  verified: boolean;
} & BaseSystemFields<T>;

// Record types for each collection

export type MonstersRecord = {
  id: string;
  armor?: number;
  attack?: string;
  description?: string;
  detail1?: string;
  detail2?: string;
  detail3?: string;
  dex?: number;
  hp?: number;
  name?: string;
  str?: number;
  wil?: number;
};

export type PokerRoomRecord = {
  description?: string;
  isVoting?: boolean;
  name?: string;
};

export type PokerUserRecord = {
  name?: string;
  pokerRoom?: RecordIdString;
};

export type PokerVoteRecord = {
  room?: RecordIdString;
  user?: RecordIdString;
  vote?: number;
};

export type PostsRecord = {
  author?: string;
  post?: HTMLString;
};

export type UsersRecord = {
  avatar?: string;
  name?: string;
};

// Response types include system fields and match responses from the PocketBase API
export type MonstersResponse<Texpand = unknown> = Required<MonstersRecord> &
  BaseSystemFields<Texpand>;
export type PokerRoomResponse<Texpand = unknown> = Required<PokerRoomRecord> &
  BaseSystemFields<Texpand>;
export type PokerUserResponse<Texpand = unknown> = Required<PokerUserRecord> &
  BaseSystemFields<Texpand>;
export type PokerVoteResponse<Texpand = unknown> = Required<PokerVoteRecord> &
  BaseSystemFields<Texpand>;
export type PostsResponse<Texpand = unknown> = Required<PostsRecord> &
  BaseSystemFields<Texpand>;
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> &
  AuthSystemFields<Texpand>;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  monsters: MonstersRecord;
  pokerRoom: PokerRoomRecord;
  pokerUser: PokerUserRecord;
  pokerVote: PokerVoteRecord;
  posts: PostsRecord;
  users: UsersRecord;
};

export type CollectionResponses = {
  monsters: MonstersResponse;
  pokerRoom: PokerRoomResponse;
  pokerUser: PokerUserResponse;
  pokerVote: PokerVoteResponse;
  posts: PostsResponse;
  users: UsersResponse;
};

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
  collection(idOrName: "monsters"): RecordService<MonstersResponse>;
  collection(idOrName: "pokerRoom"): RecordService<PokerRoomResponse>;
  collection(idOrName: "pokerUser"): RecordService<PokerUserResponse>;
  collection(idOrName: "pokerVote"): RecordService<PokerVoteResponse>;
  collection(idOrName: "posts"): RecordService<PostsResponse>;
  collection(idOrName: "users"): RecordService<UsersResponse>;
};
