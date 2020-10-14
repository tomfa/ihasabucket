export function isTopLevelDomain(domain: string): boolean {
  // TODO: This function, heh.
  return !domain.includes('.');
}

export function getApexDomain(domain: string): string {
  const domainParts = domain.split('.');
  if (domainParts.length === 1) {
    throw new Error(`${domain} is not a valid domain`);
  }
  const lastPart = domainParts[domainParts.length - 1];
  const secondLastPart = domainParts[domainParts.length - 2];
  if (!isTopLevelDomain(lastPart)) {
    throw new Error(`${lastPart} is not a known top level domain`);
  }
  return `${secondLastPart}.${lastPart}`;
}

export const domainIsApex = (domain: string): boolean =>
  domain.split('.').length === 2;
export const domainIsWWW = (domain: string): boolean =>
  domain.split('.').length === 3 && domain.startsWith('www.');
export const isDomain = (domain: string): boolean =>
  domain.split('.').length >= 2;
