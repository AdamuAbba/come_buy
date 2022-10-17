import {Product} from 'features/feed/types';
import {IFeedTabsScreenProps} from 'routes/FeedTabs/types';

interface IFeedCard {
  item: Product;
  navigation: IFeedTabsScreenProps<
    'liked-feed-screen' | 'main-feed-screen'
  >['navigation'];
}

export type {IFeedCard};
