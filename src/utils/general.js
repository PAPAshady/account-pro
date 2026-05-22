// Helper function to convert Farsi numbers to Latin
export const normalizeNumber = (value) => {
  const FarsiNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const latinNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return value
    .split('')
    .map((char) => {
      const index = FarsiNumbers.indexOf(char);
      return index !== -1 ? latinNumbers[index] : char;
    })
    .join('');
};
