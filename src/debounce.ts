type Fn<T extends unknown[], R> = (...args: T) => R;

/**
 * An higher-order-function that debounce a given function to only invoke after `N` amount of time passes since its last call.
 *
 * @param fn - The function to throttle.
 * @param duration - The number of milliseconds to debounce invocations to.
 * @param log - indicate if log the debounce steps.
 */
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
