export const server = {
  searchServer: (text: string) => {
    return new Promise<string>((resolve) => {
      window.setTimeout(() => {
        resolve(`😁 ${text}`);
      }, 500);
    });
  }
};
