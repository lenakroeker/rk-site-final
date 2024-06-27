function dateModify(d) {
  const date = new Date(d);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const day = date.getDate();
  const suffix = getOrdinalSuffix(day);

  const DateText = formattedDate.replace(day, `${day}${suffix}`);

  return DateText;
}

function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export default dateModify;
