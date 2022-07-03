import { Card, Collapse, Typography } from 'antd';

interface SupporterCardProps {
  supporter: SupportCard;
}

type MergeProps = SupporterCardProps;

function SupporterCard(props: MergeProps) {
  return (
    <Card
      title={`[${props.supporter.meta.grade}] ${props.supporter.character.name} - ${props.supporter.meta.title}`}
    >
      <Collapse>
        {props.supporter.trainingEvents.map((event) => {
          return (
            <Collapse.Panel
              header={[
                typeof event.chain === 'number' ? event.chain + 1 : undefined,
                event.title,
              ].join(' ')}
              key={[
                typeof event.chain === 'number' ? event.chain + 1 : undefined,
                event.title,
              ].join(' ')}
            >
              {typeof event.effect === 'string' ? (
                <p>{event.effect}</p>
              ) : typeof event.effect !== 'undefined' ? (
                <section>
                  <Typography.Title level={4}>성공</Typography.Title>
                  <p>{event.effect.success}</p>
                  <Typography.Title level={4}>실패</Typography.Title>
                  <p>{event.effect.failure}</p>
                </section>
              ) : null}
              {event.options?.map((selection) => {
                return (
                  <section key={selection.answer}>
                    <Typography.Title level={4}>
                      {selection.answer}
                    </Typography.Title>
                    <p>{selection.effect}</p>
                  </section>
                );
              })}
            </Collapse.Panel>
          );
        })}
      </Collapse>
    </Card>
  );
}

SupporterCard.defaultProps = {};

export default SupporterCard;
