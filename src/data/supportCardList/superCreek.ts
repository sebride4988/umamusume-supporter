import {
  도와드릴_일이_있으면_맡겨주세요,
  배려도_맡겨주세요,
  갓_만든_음식은_별안간_듬뿍,
  끓여서_걸쭉하게_부드러운_맛으로,
  한_그릇_더_드세요_착한_아이들,
} from '../trainingEvents/superCreek';
import makeSupporterCard from '../helper/makeSupportCard';
import { superCreek } from '../character';

const 슈퍼_크릭_서포트_카드 = makeSupporterCard(superCreek);

export const 슈퍼_크릭_한_알의_편안함: SupportCard = 슈퍼_크릭_서포트_카드(
  'SSR',
  '한 알의 편안함',
  [
    도와드릴_일이_있으면_맡겨주세요,
    배려도_맡겨주세요,
    갓_만든_음식은_별안간_듬뿍,
    끓여서_걸쭉하게_부드러운_맛으로,
    한_그릇_더_드세요_착한_아이들,
  ]
);
