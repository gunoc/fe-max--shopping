export const SidebarTemplateGenerator = {
  generateMainMenu(categoryInfo) {
    const mainMenuTemplate = Object.keys(categoryInfo).reduce((acc, cur) => {
      return (acc += `<li class="side__list-item">
      <span class="side__list-item-name">${cur}</span>
      <img class="side__list-item-arrow" src="./src/images/chevron-right-gray.svg" alt="더보기">
    </li>`);
    }, '');
    return mainMenuTemplate;
  },

  generateCollapsibleMenu(collapsibleObj) {
    const simpleViewLiTemplate = ` <li class="side__view-simple side__view-controll" data-id="simple">
      <span class="side__list-item-name" data-id="simple">간단히 보기</span>
      <img src="./src/images/chevron-up-gray.svg" alt="접기">
    </li>`;

    const collapsibleMenuTemplate =
      Object.keys(collapsibleObj).reduce((acc, cur) => {
        return (acc += `<li class="side__list-item">
        <span class="side__list-item-name">${cur}</span>
        <img class="side__list-item-arrow" src="./src/images/chevron-right-gray.svg" alt="더보기">
    </li>
  `);
      }, '') + simpleViewLiTemplate;
    return collapsibleMenuTemplate;
  },

  generateSubMenu(menuObj, keyText) {
    const loginTemplate = `<li class="side__header">
    <img
      class="side__header-icon"
      src="./src/images/user-white.svg"
      alt="사용자"
    />
    <span class="side__header-greeting">안녕하세요, 로그인</span>
  </li>`;
    const returnToMenuTemplate = `<li class="side__list-item--back side__view-controll" data-id="close-sub">
      <img src="./src/images/arrow-left-gray.svg" alt="돌아가기" data-id="close-sub">
      <span class="side__list-item-name" data-id="close-sub">주메뉴</span>
  </li>`;
    const subTitleTemplate = `<li class="side__title-text">
      <span>${keyText}</span>
  </li>`;
    const subListTemplate = menuObj[keyText].reduce((acc, cur) => {
      return (acc += `<li class="side__list-item">
        <span class="side__list-item-name">${cur}</span>
    </li>`);
    }, '');
    const subMenuTemplate =
      loginTemplate + returnToMenuTemplate + subTitleTemplate + subListTemplate;

    return subMenuTemplate;
  },
};
