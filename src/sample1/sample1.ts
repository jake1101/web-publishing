import '/src/reset.css';
import './style.css';

export default function ts1() {
  const root = document.querySelector('body')!;
  function skipHeight(): number {
    return document.querySelector('nav')!.offsetHeight;
  }

  function bgcMover(obj: any): Function {
    const { he, ss, se, rvs }: any = obj;
    const y = window.scrollY;
    const mover = (): string => {
      const p = Math.floor(((y - ss) / se) * 100);
      const result = (he * p) / 100;
      const speed = rvs ? 0.5 : 0.8;
      const position = rvs ? `50% -${result * speed}px` : `50% ${result}px`;
      return position;
    };

    return mover;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const startScrollHeight = (idx: number): number => {
      const list = Array.from(document.querySelectorAll('section')).map(
        (e: HTMLElement, i) => (i === 0 ? 0 : e.clientHeight)
      );

      let result = 0;

      for (let j = 0; j < idx; j++) {
        result += list[j];
      }

      return result;
    };

    const heightFromTop = (idx: number): any => {
      const list = Array.from(document.querySelectorAll('section'))
        .map((e: HTMLElement) => e.clientHeight)
        .slice(1);

      let result = document.querySelectorAll('section')![0].clientHeight;

      for (let j = 0; j < idx; j++) {
        result += list[j];
      }

      return result;
    };

    const sectionList = Array.from(document.querySelectorAll('section')).map(
      (e, i) => ({
        el: e,
        bg: e.querySelector<HTMLElement>(
          '.background_container:not(.home) img'
        )!,
        he: e.clientHeight,
        ss: startScrollHeight(i),
        sh:
          startScrollHeight(i) +
          e.clientHeight +
          window.innerHeight -
          skipHeight(),
        se: e.clientHeight + window.innerHeight - skipHeight(),
        rvs: e.querySelector<HTMLElement>(
          '.background_container:is(.reverse) img'
        )!
          ? true
          : false,
        nid: `nav_link_${i + 1}`,
        hft: heightFromTop(i),
      })
    );

    const onScroll = () => {
      const y = window.scrollY;
      const showingSectionDataList = sectionList.filter((o: any) => {
        const { bg, ss, sh } = o;
        if (bg) {
          if (y > ss && y < sh) return o;
        }
      });

      showingSectionDataList.forEach((e) => {
        const m = bgcMover(e);
        e.bg.style.objectPosition = m();
      });

      const activateSectionData = sectionList.find((o) => y < o.hft)!;
      const activateNav: HTMLElement = document.getElementById(
        activateSectionData!.nid
      )!;

      document.querySelectorAll('a[id*="nav_link_"]').forEach((e) => {
        if (activateNav) {
          e === activateNav
            ? e.classList.add('activate')
            : e.classList.remove('activate');
        }
      });
    };

    document.addEventListener('scroll', onScroll);
  });

  return root;
}
