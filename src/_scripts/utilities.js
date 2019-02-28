export default {
  humanize(string) {
    return string.replace(/(?:^|\.\s+)./g, function(match) {
        return match.toUpperCase();
      }).replace(/[a-z][A-Z]/g, function(match) {
        return match[0] + " " + match[1].toLowerCase();
      }).replace(/_/g, " ");
  },
};
