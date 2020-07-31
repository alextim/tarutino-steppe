

const Utils = {
  reverseString: (s) => {
    let newString = "";
    for (let i = s.length - 1; i >= 0; i--) {
      newString += s[i];
    }

    return newString;
  },

  formatDate: (s, locale) => {
    const pattern = /(\d{2})-(\d{2})-(\d{4})/;
    const d = new Date(s.replace(pattern, "$3-$2-$1"));
    // const d = new Date(s);
    const sep = ".";
    const ye = new Intl.DateTimeFormat(locale, { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat(locale, { month: "2-digit" }).format(d);
    const da = new Intl.DateTimeFormat(locale, { day: "2-digit" }).format(d);
    return `${da}${sep}${mo}${sep}${ye}`;
  },

  formatDays: (days) => (days > 0 ? num2form(days, "день", "дня", "дней") : ""),
  formatNights: (nights) =>
    nights > 0 ? num2form(nights, "ночь", "ночи", "ночей") : "",
  addDays: (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  },
};

export default Utils;
