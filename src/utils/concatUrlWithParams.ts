export interface IParam {
  [x: string]: string | number;
}

export const concatUrlWithParams = (url: string, params?: IParam) => {
  let result = url;

  if (params) {
    const resultString = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');

    if (resultString) {
      if (url.charAt(url.length - 1) === '?') {
        result = `${url}${resultString}`;
      } else {
        result = url.includes('?')
          ? `${url}&${resultString}`
          : `${url}?${resultString}`;
      }
    }
  }

  return result;
};
