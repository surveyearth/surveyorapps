export function noMark(str = '') {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  return str;
}

export function noDash(str = '') {
  str = str.replace(/\-|\_/g, '');
  return str;
}

export function dashToSpace(str = '') {
  str = str.replace(/\-|\_/g, ' ');
  return str;
}

export function o2a(
  object: {[$key: string]: any},
  clone = false,
  limit?: number,
  honorable = false
): any[] {
  let output = [];
  if (clone) {
    object = Object.assign({}, object || {});
  }
  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'object') {
      object[key]['$key'] = key;
    } else {
      object[key] = {
        $key: key,
        value: object[key]
      };
    }
    output.push(object[key]);
  }
  if (limit) {
    output.splice(limit, output.length);
  }
  if (honorable && output.length < 1) {
    output = null;
  }
  return output;
}

export function a2o<Obj>(
  array: Obj[],
  keyName?: string
): {[key: string]: Obj} {
  const object = {};
  for (let i = 0; i < (array || []).length; i++) {
    const item = array[i];
    object[
      item[keyName] ||
      item['$key'] ||
      item['key'] ||
      item['slug'] ||
      (item['id'] ? '' + item['id'] : null) ||
      (item['#'] ? '' + item['#'] : null) ||
      ('' + Math.random() * 1E20)
    ] = item;
  }
  return object;
}

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatDate(date: Date): string {
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

export function relativeTime(time: any): string {
  const now: any = new Date();
  const then: any = new Date(time);

  const diff = now - then;

  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
  // week = day * 7;
  if (isNaN(diff) || diff < 0) {
    return 'n/a'; // return blank string if unknown
  }
  if (diff < second * 2) {
    // within 2 seconds
    return 'now';
  }
  if (diff < minute) {
    return Math.floor(diff / second) + ' seconds ago';
  }
  if (diff < minute * 2) {
    return 'about 1 minute ago';
  }
  if (diff < hour) {
    return Math.floor(diff / minute) + ' minutes ago';
  }
  if (diff < hour * 2) {
    return 'about 1 hour ago';
  }
  if (diff < day) {
    return  Math.floor(diff / hour) + ' hours ago';
  }
  if (diff > day && diff < day * 2) {
    return 'yesterday';
  }
  return formatDate(then);
}

export function waitUtil(
  condition: () => boolean,
  intervalValue = 1000,
  timeoutValue = 10000
) {
  return new Promise((resolve, reject) => {
    const theInterval = setInterval(() => {
      if (condition()) {
        clearInterval(theInterval);
        resolve();
      }
    }, intervalValue);
    setTimeout(() => {
      clearInterval(theInterval);
      reject();
    }, timeoutValue);
  });
}

export function search(items: any[], keyword: string, fields?: string[]) {
  const find = (item, kw) => {
    let againstString = item.title || item.name;
    (fields || []).forEach(field => {
      if (!item[field]) { return; }
      if (item[field] instanceof Object) {
        return againstString += ' // ' +
        (JSON.stringify(item[field]))
        .replace(/\{/gi, '')
        .replace(/\"\}/gi, '')
        .replace(/\{\"/gi, '')
        .replace(/\"\:\"/gi, ' ')
        .replace(/\"\,\"/gi, ' ')
        .replace(/\"/gi, '');
      }
      againstString += ' // ' + item[field];
    });
    againstString = againstString.toLowerCase();
    againstString = againstString + ' // ' + dashToSpace(againstString) + ' // ' + noDash(againstString);
    return againstString.indexOf(kw.toLowerCase()) > -1;
  };
  return keyword ? (items || []).filter(item => find(item, noMark(keyword))) : items;
}
