import { curry } from 'ramda';

function makeSupportCard(
  character: UmamusumeCharacter,
  grade: SupportCardMeta['grade'],
  title: SupportCardMeta['title'],
  trainingEvents: TrainingEvent[]
): SupportCard {
  return {
    character,
    trainingEvents,
    meta: {
      grade,
      title,
    },
  };
}

export default curry(makeSupportCard);
