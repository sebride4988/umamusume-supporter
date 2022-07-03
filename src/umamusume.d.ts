interface UmamusumeCharacter {
  name: string;
}

interface EventOption {
  answer: string;
  effect: string;
}

interface TrainingEvent {
  title: string;
  chain?: number;
  options?: EventOption[];
  effect?:
    | string
    | {
        success: string;
        failure: string;
      };
}

interface CardMeta {
  title: string;
}

interface SupportCardMeta extends CardMeta {
  grade: 'R' | 'SR' | 'SSR';
}

interface SupportCard {
  character: UmamusumeCharacter;
  meta: SupportCardMeta;
  trainingEvents: TrainingEvent[];
}
