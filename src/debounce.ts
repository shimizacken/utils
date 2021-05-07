export const debounce = (fn, duration: number) => {
  let timeoutId: number;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn(...args);
    }, duration);
  };
};
