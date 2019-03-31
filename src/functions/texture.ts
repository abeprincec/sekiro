export const texture = (url?: string) => {
  const base = {
    backgroundSize: '100% 100%',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat'
  };
  if (url) {
    return {
      ...base,
      background: `url(${url})`
    };
  }
  return base;
};
