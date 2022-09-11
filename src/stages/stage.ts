export interface StageWithoutAnswerType {
  question: string;
  correctAnswerN: number;
  extraHint?: string;
}

export type GenerateStagesFunction = () => Stage[];

export default interface Stage {
  question: string;
  correctAnswer: string;
  extraHint?: string;
}
