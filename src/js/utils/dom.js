const $ = (selector, root = document) => root.querySelector(selector);
const $All = (selector, root = document) => root.querySelectorAll(selector);

function renderChildren(parentNode, template) {
  parentNode.innerHTML = template;
}

export { $, $All, renderChildren };
