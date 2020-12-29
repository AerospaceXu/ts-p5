export const requestFullScreen = () => {
  document.documentElement.requestFullscreen().catch((reason) => {
    console.error(reason);
  });
};

export const exitFullScreen = () => {
  document.exitFullscreen().catch((reason) => {
    console.error(reason);
  });
};
