import './App.css';
import supportCardList from './data/supportCardList';
import SupporterCard from './components/SupporterCard';
import { List, Typography } from 'antd';
import { useMemo } from 'react';
import { anyPass } from 'ramda';

function CardList(props: { title: string; dataSource: SupportCard[] }) {
  return (
    <section>
      <Typography.Title>{props.title}</Typography.Title>
      <List
        bordered
        grid={{ gutter: 16 }}
        dataSource={props.dataSource}
        rowKey={(card) => card.character.name + card.meta.title}
        renderItem={(card) => (
          <List.Item>
            <SupporterCard supporter={card} />
          </List.Item>
        )}
      />
    </section>
  );
}

function makePredicateFavorite(
  ...favorites: { characterName: string; cardTitle: string }[]
) {
  const funcList = favorites.map((favorite) => {
    return (card: SupportCard) => {
      return (
        card.character.name === favorite.characterName &&
        card.meta.title === favorite.cardTitle
      );
    };
  });
  return anyPass(funcList);
}

const favorites = [
  { characterName: '스페셜 위크', cardTitle: '저녁 놀은 동경의 색' },
  { characterName: '맨하탄 카페', cardTitle: '비의 독주, 나의 독창' },
  { characterName: '슈퍼 크릭', cardTitle: '한 알의 편안함' },
];

function App() {
  const favoriteList = useMemo(() => {
    return supportCardList.filter(makePredicateFavorite(...favorites));
  }, []);
  const otherList = useMemo(() => {
    return supportCardList.filter(
      (card) => !makePredicateFavorite(...favorites)(card)
    );
  }, []);
  return (
    <div className="App">
      <CardList title="즐겨찾기" dataSource={favoriteList} />
      <CardList title="목록" dataSource={otherList} />
    </div>
  );
}

export default App;
