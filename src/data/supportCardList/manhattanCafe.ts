import {
  밤의_독주,
  고요함을_즐기다,
  비의_유혹,
  큰_비의_유혹,
} from '../trainingEvents/manhattanCafe';
import makeSupporterCard from '../helper/makeSupportCard';
import { 맨하탄_카페 } from '../character';

const 맨하탄_카페_서포트_카드 = makeSupporterCard(맨하탄_카페);

export const 맨하탄_카페_비의_독주_나의_독창: SupportCard =
  맨하탄_카페_서포트_카드('SR', '비의 독주, 나의 독창', [
    밤의_독주,
    고요함을_즐기다,
    비의_유혹,
    큰_비의_유혹,
  ]);
