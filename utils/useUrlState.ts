import qs, { ParsedUrlQuery } from 'querystring';
import { NextRouter, useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

type DataValue = string | boolean | number;
export type Data = { [key: string]: DataValue | DataValue[] };

export const useUrlState = () => {
  const router: NextRouter = useRouter();
  const [urlData, setUrlData] = useState<Data>({});
  useEffect(() => {
    const newData = getDataFromUrlQuery(router.query);
    if (hasChanged(urlData, newData)) {
      setUrlData(newData);
    }
  }, [JSON.stringify(router.query)]);
  const updateUrlData = useCallback(
    (data: Data) => {
      const newData = filterInvalidValues({
        ...mapToQuery(urlData),
        ...mapToQuery(data),
      });
      setUrlData(newData);
      router.push(`/?` + qs.stringify(newData));
    },
    [urlData]
  );
  return { urlData, updateUrlData };
};

const filterInvalidValues = (data: ParsedUrlQuery): ParsedUrlQuery =>
  Object.entries(data).reduce((map, [key, value]) => {
    if (value) {
      return { ...map, [key]: value };
    }
    return map;
  }, {});

function valueIsNumber(value: string) {
  return !Number.isNaN(parseInt(value));
}

const parseToValue = (value: string): DataValue => {
  if (value.toLowerCase() === 'false') {
    return false;
  }
  if (value.toLowerCase() === 'true') {
    return true;
  }
  if (valueIsNumber(value)) {
    return parseInt(value);
  }
  return value;
};

const mapToQuery = (data: Data): ParsedUrlQuery => {
  return Object.entries(data).reduce((map, [key, value]) => {
    const stringValue =
      value instanceof Array ? value.map((v) => String(v)) : String(value);
    return {
      ...map,
      [key]: stringValue,
    };
  }, {});
};

const getDataFromUrlQuery = (parsedUrlQuery: ParsedUrlQuery): Data => {
  // Note: This ignores empty string values, e.g. would not support ?webapp
  const urlState: Data = {};
  Object.entries(parsedUrlQuery).forEach(([query, value]) => {
    if (value) {
      if (value instanceof Array) {
        urlState[query] = value.map(parseToValue);
      } else {
        urlState[query] = parseToValue(value);
      }
    }
  });
  return urlState;
};

const hasChanged = (oldData: Data, newData: Data): boolean => {
  return JSON.stringify(oldData) !== JSON.stringify(newData);
};
