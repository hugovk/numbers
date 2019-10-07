const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

function getOddAndEven() {
  const pages = $("input[name=pages]");

  if (pages.val().length) {
    const total = Number(pages.val());
    let odds = [];
    let evens = [];

    for (let i = 1; i < total+1; i++) {
      if ((i % 2) === 0) {
        evens.push(i);
      } else {
        odds.push(i);
      }
    }

    if (total % 2 === 1) {
      const last = odds.pop();
      odds.push('<span class="last">' + last + '</span>');
    }

    $("#odd").html(odds.join(", "));
    $("#even").html(evens.join(", "));
  }
}
