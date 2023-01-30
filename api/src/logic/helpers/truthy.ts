export const strTruthy = (val?: string): boolean => {
  if (val) {
    return val.toLowerCase() === 'true' || val === '1';
  } else return false;
};

export const envTruthy = (key: string): boolean => {
  return strTruthy(process.env[key]);
};
