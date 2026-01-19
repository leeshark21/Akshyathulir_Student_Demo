export const usUnemploymentRate = [
  { date: new Date(2024, 0, 1), rate: 0 },
  { date: new Date(2024, 1, 1), rate: 39 },
  { date: new Date(2024, 2, 1), rate: 10 },
  { date: new Date(2024, 3, 1), rate: 40 },
  { date: new Date(2024, 4, 1), rate: 4.1 },
  { date: new Date(2024, 5, 1), rate: 59 },
  { date: new Date(2024, 6, 1), rate: 4.2 },
  { date: new Date(2024, 7, 1), rate: 80 },
];

export const dateAxisFormatter = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

export const percentageFormatter = (value) => `${value}%`;
