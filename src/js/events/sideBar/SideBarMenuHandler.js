// 미사용: 기존의 구조라면 별도의 클래스로 분리해야 하는지 의문

export class SideBarMenuHandler {
  constructor() {
    this.templateGenerator = new TemplateGenerator();
  }
  toggleSidebar() {
    document.addEventListener('click', e => {
      if (e.target.closest('.hamburger-btn')) {
        layerOpenState.sidebar = true;
        sideArea.classList.add('active');
        closeBtn.classList.remove('close');
        handleDimming();
      } else if (!e.target.closest('.side')) {
        layerOpenState.sidebar = false;
        sideArea.classList.remove('active');
        closeBtn.classList.add('close');
        handleDimming();
      }
    });
  }
  toggleMenu() {
    sideViewAll.addEventListener('click', () => {
      sideListMain.classList.remove('compressed');
    });
    const sideViewSimple = document.querySelector('.side__view-simple');
    sideViewSimple.addEventListener('click', () => {
      sideListMain.classList.add('compressed');
    });
  }
  openSubMenu(node, menuObj) {
    document.querySelector(node).addEventListener('click', e => {
      if (e.target.dataset.id) {
        return;
      } else {
        const keyText = e.target.innerText;
        const subTemplate = this.templateGenerator.generateSubMenu(
          menuObj,
          keyText
        );
        menuRenderer(sideListSub, subTemplate);
        sideBox.classList.add('translateX');
      }
    });
  }
  closeSubMenu() {
    sideListSub.addEventListener('click', e => {
      if (!e.target.dataset.id) {
        return;
      } else {
        console.log(e.target.dataset.id);
        sideBox.classList.remove('translateX');
      }
    });
  }
}
