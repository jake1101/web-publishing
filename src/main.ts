export {};

function bgcMover(selector: string): Function {
  const h = document.querySelector<HTMLElement>(selector)!.offsetHeight;
  const mover = (): string => {
    const p = Math.floor(
      (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100
    );

    const r = (h * p) / 100;

    console.log(`${h}의 ${p}% = `, (h * p) / 100 + '\n');
    console.log(`${h}의 ${r}은 `, (r * 100) / h + '%\n');
    console.log('\n');

    return `50% ${r * 1.2}px`;
  };

  return mover;
}

const m2 = bgcMover('.home_section2');
function onScrollBgc2() {
  const s2 = document.querySelector<HTMLElement>(
    '.home_section2 .background_img'
  )!;
  s2.style.objectPosition = m2();
}
document.addEventListener('scroll', onScrollBgc2);

const m4 = bgcMover('.home_section4');
function onScrollBgc4() {
  const s4 = document.querySelector<HTMLElement>(
    '.home_section4 .background_img'
  )!;
  s4.style.objectPosition = m4();
}
document.addEventListener('scroll', onScrollBgc4);
