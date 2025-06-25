// server/utils/answerStore.ts

const answerStore = new Map<string, string[]>(); // topic → correctAnswers[]

export function storeAnswers(topic: string, correctAnswers: string[]) {
  answerStore.set(topic, correctAnswers);
}

export function getAnswers(topic: string): string[] | undefined {
  return answerStore.get(topic);
}
