export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)];
};

export const convertToTitleCase = (str) => {
  // const exceptions = ['of', 'the', 'and', 'to'];
  const exceptions = [];

  if (!str) {
    return '';
  }

  return str
    .toLowerCase()
    .split(' ')
    .map((word, i) => {
      return exceptions.includes(word) && i != 0 ? word : word.charAt(0).toUpperCase().concat(word.substr(1));
    })
    .join(' ');
};
