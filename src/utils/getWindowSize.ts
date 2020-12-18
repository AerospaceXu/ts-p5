export const getWindowSize = () => {
  const { clientHeight, clientWidth } = document.documentElement;
  return {
    width: clientWidth,
    height: clientHeight,
  };
};
