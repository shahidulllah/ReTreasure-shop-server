import { IListing } from "../listings/listings.interface";

export interface IWishlist {
    userId: string;
    listings: IListing[];
  }