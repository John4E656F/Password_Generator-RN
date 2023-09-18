function getRandomItem<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
export function addNumber(password: string): string {
  const randomNumber = Math.floor(Math.random() * 10); // Generates a random number between 0 and 9

  // Define character replacements (e.g., 'o' => '0', 'e' => '3')
  const characterReplacements: Record<string, string> = {
    o: '0',
    e: '3',
    // Add more replacements as needed
  };

  // Determine whether to change a character to a number or add a number to the end
  const shouldChangeCharacter = Math.random() < 0.5; // 50% chance to change a character

  // Determine whether to change 'e' to '3', 'o' to '0', both, or none
  const changeOption = getRandomItem(['e', 'o', 'both', 'none']);

  if (shouldChangeCharacter && changeOption !== 'none') {
    // Find and replace characters in the password based on the selected change option
    const passwordArray = password.split('');
    for (let i = 0; i < passwordArray.length; i++) {
      const char = passwordArray[i];
      if (char in characterReplacements) {
        if (changeOption === 'both' || changeOption === char) {
          passwordArray[i] = characterReplacements[char];
        }
      }
    }
    return passwordArray.join('');
  } else {
    // Add the random number to the end of the password
    return password + String(randomNumber);
  }
}
