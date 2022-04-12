//weird method which will shuffle the array
export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);
