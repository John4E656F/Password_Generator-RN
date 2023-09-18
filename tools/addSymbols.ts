// Function to add a random symbol to a password
export function addSymbols(password: string): string {
  // Determine whether to change a character or add a symbol
  const shouldChangeCharacter = Math.random() < 0.5; // 50% chance to change a character

  if (shouldChangeCharacter) {
    // Randomly decide which character(s) to change
    const randomChange = Math.random(); // Randomly decide whether to change characters

    if (randomChange < 0.33) {
      // Change 'i' to '!'
      password = password.replace(/i/g, '!');
    } else if (randomChange < 0.67) {
      // Change 'a' to '@'
      password = password.replace(/a/g, '@');
    } else {
      // Change both 'i' to '!' and 'a' to '@'
      password = password.replace(/i/g, '!').replace(/a/g, '@');
    }
  } else {
    // Determine whether to add the symbol to the beginning or end
    const addToBeginning = Math.random() < 0.5; // 50% chance to add to the beginning

    const randomSymbol = Math.random() < 0.5 ? '!' : '@'; // Randomly choose between '!' and '@'

    if (addToBeginning) {
      return randomSymbol + password;
    } else {
      return password + randomSymbol;
    }
  }
  password = password.replace(/ /g, (match) => {
    const replaceOptions = ['_', '-', ' ']; // You can add more options if needed
    const randomIndex = Math.floor(Math.random() * replaceOptions.length);
    return replaceOptions[randomIndex];
  });

  return password;
}
