import { Answer } from '../types';
import { domainIsApex, domainIsWWW, isDomain } from '../utils/domain';

export const answerIsApexDomain = (answer: Answer): boolean =>
  typeof answer === 'string' && domainIsApex(answer);
export const answerIsWWWDomain = (answer: Answer) =>
  typeof answer === 'string' && domainIsWWW(answer);
export const answerIsDomain = (answer: Answer) =>
  typeof answer === 'string' && isDomain(answer);
