import something from 'somewhere'

class ImageDiff extends HTMLElement {
  constructor() {
    super();
    const styleElem = document.createElement('style');
    styleElem.innerHTML = styles;
    document.head.appendChild(styleElem);
  }
}