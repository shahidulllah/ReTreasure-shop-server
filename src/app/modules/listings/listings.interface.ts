export interface IListing {
  _id?: string;
  title: string;
  description: string;
  price: number;
  category: string;
  condition: string;
  location: string;
  image?: string;
  sellerId: string | undefined;
}
