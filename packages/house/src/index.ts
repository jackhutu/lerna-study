// export default function house() {
//   return 'house';
// }

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const isArray = Array.isArray;
