function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function getOddAndEven() {
  const pages = document.querySelectorAll('input[name="pages"]')[0];

  if (pages.value.length) {
    const total = Number(pages.value);
    let odds = [];
    let evens = [];

    for (let i = 1; i < total + 1; i++) {
      if (i % 2 === 0) {
        evens.push(i);
      } else {
        odds.push(i);
      }
    }

    if (total % 2 === 1) {
      const last = odds.pop();
      odds.push('<span class="last">' + last + '</span>');
    }

    document.getElementById('odd').innerHTML = odds.join(', ');
    document.getElementById('even').innerHTML = evens.join(', ');
  }
}
