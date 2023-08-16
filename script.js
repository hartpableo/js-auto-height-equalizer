document.addEventListener('DOMContentLoaded', () => {
  let items = document.querySelectorAll('[data-equal-height]');
  heightEqualize(items);
}, { passive: true });

function heightEqualize(itemsArray) {
  let groups = new Map();

  itemsArray.forEach(el => {
      let attrValue = el.getAttribute('data-equal-height');
      if (!groups.has(attrValue)) {
          groups.set(attrValue, []);
      }
      groups.get(attrValue).push(el);
  });

  groups.forEach(group => {
      let highest = 0;

      group.forEach(item => {
          if (item.offsetHeight > highest) {
              highest = item.offsetHeight;
          }
      });

      group.forEach(item => {
          item.style.height = `${highest}px`;
      });
  });
}