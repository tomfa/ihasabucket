import { Answer } from '../types';

export const trail = (
  name: string,
  data?: { [key: string]: string | boolean | number | null | Answer }
) => {
  try {
    if (process.env.NODE_ENV === 'development') {
      return;
    }
    if (sensitiveKeys.includes(name)) {
      return;
    }
    const payload = data && Object.fromEntries(Object.entries(data).map(clean));
    // @ts-ignore
    if (!window || !window.splitbee) {
      return;
    }
    // @ts-ignore
    window.splitbee.track(name, payload);
  } catch (error) {
    // That's fine <3
  }
};

const clean = ([key, value]): string[] => {
  if (sensitiveKeys.includes(key)) {
    return [key, '---'];
  }
  if (['string', 'number', 'boolean'].includes(typeof value)) {
    return [key, value];
  }
  if (!value) {
    return [key, null];
  }
  if (value instanceof Array) {
    return [key, value.map((v) => v.value).join(',')];
  }
  return [key, value.value];
};

const sensitiveKeys = ['bucketName', 'forwardingBucket'];
