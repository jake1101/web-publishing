import bootstrap from 'bootstrap';

// const scrollSpy = new ScrollSpy(document.body, {
//   target: '#nav-scrollspy',
// });

document.addEventListener('DOMContentLoaded', function () {
  var scrollArea = document.getElementById('nav-scrollspy')!;
  scrollArea.addEventListener('activate.bs.scrollspy', function () {
    var currentItem = document.querySelector('.nav a.active')!;
    console.log(currentItem);
    // document.getElementById('info').innerHTML =
    //   'Currently you are viewing - ' + currentItem;
  });
});

function bgcMover(container_cn: string, selector_cn: string): Function {
  const h = document.querySelector<HTMLElement>(selector_cn)!.offsetHeight;
  const mover = (): string => {
    const p = Math.floor(
      (document.querySelector<HTMLElement>(container_cn)!.scrollTop /
        (document.querySelector<HTMLElement>(container_cn)!.offsetHeight -
          document.querySelector<HTMLElement>(container_cn)!.scrollHeight)) *
        100
    );
    const r = ((h * p) / 100) * 1.2;

    console.log(r);

    // console.log(`${h}의 ${p}% = `, (h * p) / 100 + '\n');
    // console.log(`${h}의 ${r}은 `, (r * 100) / h + '%\n');
    // console.log('\n');

    return `50% ${r}px`;
  };

  return mover;
}

(function () {
  const bg_list = document.querySelectorAll<HTMLElement>('.background_img');
  const onScroll = () => {
    console.log(1);
    bg_list.forEach((e: HTMLElement) => {
      const cn1 = '.home_container';
      const cn2 = '.' + e.parentElement!.classList.item(0)!;
      const m = bgcMover(cn1, cn2);
      e.style.objectPosition = m();
    });
  };

  document
    .querySelector<HTMLElement>('.home_container')!
    .addEventListener('scroll', onScroll);
})();

// document.addEventListener('load', addScrollEvent);

// const m2 = bgcMover('.home_section2');
// function onScrollBgc2() {
//   const s2 = document.querySelector<HTMLElement>(
//     '.home_section2 .background_img'
//   )!;
//   s2.style.objectPosition = m2();
// }
// document.addEventListener('scroll', onScrollBgc2);

// const m4 = bgcMover('.home_section4');
// function onScrollBgc4() {
//   const s4 = document.querySelector<HTMLElement>(
//     '.home_section4 .background_img'
//   )!;
//   s4.style.objectPosition = m4();
// }
// document.addEventListener('scroll', onScrollBgc4);
