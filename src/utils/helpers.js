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

  // const arr = [
  //   { id: 1, name: 'Tom' },
  //   { id: 1, name: 'Tom' },
  //   { id: 2, name: 'Nick' },
  //   { id: 2, name: 'Nick' },
  //   { id: 3, name: 'John' },
  // ];

  // const uniqueIds = [];
  // const uniqueArr = arr.filter((element) => {
  //   const isDuplicate = uniqueIds.includes(element.id);

  //   if (!isDuplicate) {
  //     uniqueIds.push(element.id);

  //     return true;
  //   }

  //   return false;
  // });
  // 👇️ [{id: 1, name: 'Tom'}, {id: 2, name: 'Nick'}]

  return ['all', ...new Set(unique)];
};
