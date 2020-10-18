var decimals = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var dozens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

module.exports = function toReadable (number) {
  return numberToWords(number);
}

function numberToWords (number) {
  num = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!num) return;
  var reqString = '';
  reqString += (num[1] != 0) ? (decimals[Number(num[1])] || dozens[num[1][0]] + ' ' + decimals[num[1][1]]) + 'crore ' : '';
  reqString += (num[2] != 0) ? (decimals[Number(num[2])] || dozens[num[2][0]] + ' ' + decimals[num[2][1]]) + 'lakh ' : '';
  reqString += (num[3] != 0) ? (decimals[Number(num[3])] || dozens[num[3][0]] + ' ' + decimals[num[3][1]]) + 'thousand ' : '';
  reqString += (num[4] != 0) ? (decimals[Number(num[4])] || dozens[num[4][0]] + ' ' + decimals[num[4][1]]) + 'hundred ' : '';
  reqString += (num[5] != 0) ? (decimals[Number(num[5])] || dozens[num[5][0]] + ' ' + decimals[num[5][1]]) + '' : '';
  return reqString.trim();
}
