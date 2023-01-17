interface Rating {
  rate: number;
  count: number;
}
interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
interface IFeedCard {
  item: Item;
}

export type {IFeedCard};
