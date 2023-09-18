// Import your word list files
import { verbs } from '../assets/wordlist/verbs/verbs';
import { nouns } from '../assets/wordlist/noun/noun';

// Function to get a random item from an array
function getRandomItem<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Function to generate a memorable password
export function generateMemorablePassword(passwordLength: number): { password: string; hint: string } {
  // Get a random verb
  const verb = getRandomItem(verbs);

  // Calculate the number of nouns needed based on passwordLength
  const numNouns = Math.max(passwordLength - 1, 1);

  // Get the remaining nouns
  const selectedNouns: string[] = [];
  for (let i = 0; i < numNouns; i++) {
    selectedNouns.push(getRandomItem(nouns));
  }

  // Combine verb and nouns to create the password
  const password = [verb, ...selectedNouns].join('');

  // Create the hint by joining the chosen words with spaces
  const hint = [verb, ...selectedNouns].join(' ');

  return { password, hint };
}
