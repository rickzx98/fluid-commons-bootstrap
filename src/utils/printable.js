
export function printA4(className) {
  const printContent = document.getElementsByClassName('paper')[0].innerHTML;
  const head = document.getElementsByTagName('head')[0].innerHTML;
  const popupWin = window.open('', '_blank', `fullscreen=yes, scrollbars=auto`);
  const printables = `<html><head>${head}</head><body class="books" onload="window.print()"><div class="${className} paper">${printContent}</div></body></html>`;
  popupWin.document.open();
  popupWin.document.write(printables);
  popupWin.document.close();
}
