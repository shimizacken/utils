type Fn<T extends unknown[], R> = (...args: T) => R;

export const debounce = <T extends unknown[], R>(
  fn: Fn<T, R>,
  duration: number,
  log = false
) => {
  let timeoutId: number;
  let callCounter = 0;

  return function (this: void, ...args: T) {
    if (log) {
      console.log("fn called 🤙", ++callCounter);
    }

    clearTimeout(timeoutId);

    return new Promise<R>((resolve) => {
      timeoutId = window.setTimeout(() => {
        const fnResult = fn.apply(this, args);
        resolve(fnResult);

        if (log) {
          console.log("fn invoked 🚀");
          console.log("fnResult 📦", fnResult);
        }
      }, duration);
    });
  };
};
