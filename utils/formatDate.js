export const formatDate = date => {
  const formatted = new Date(date).toLocaleDateString('en-GB');
  return formatted;
};
