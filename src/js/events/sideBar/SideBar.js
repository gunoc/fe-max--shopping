import { PATH } from '../../constants/path.js';
import { handleDimming, layerOpenState } from '../../utils/dim.js';
import { $, renderChildren } from '../../utils/dom.js';
import { JSONClient } from '../api/api.js';
import { SidebarTemplateGenerator } from './SidebarTemplateGenerator.js';

export class SideBar {
  constructor() {
    this.templateGenerator = SidebarTemplateGenerator;
    this.fetcher = new JSONClient(PATH.side);
    this.sideArea = $('.side');
    this.closeBtn = $('.side__close-btn');
    this.sideBox = $('.side__box', this.sideArea);
    this.sideViewAll = $('.side__view-all', this.sideArea);
    this.sideListDigital = $('.side__list-digital', this.sideArea);
    this.sideListShopping = $('.side__list-shopping', this.sideArea);
    this.sideListMain = $('.side__list-main', this.sideArea);
    this.sideListSub = $('.side__list-sub', this.sideArea);
  }

  async initSideBar() {
    this.toggleSidebar();
    this.renderDigitalCategory();
    this.renderShoppingCategory();
    this.closeSubMenu();
    await this.renderCollapsibleMenu(); // 아래 toggleMenu 내부에서 사용하는 [간단히보기] 노드가 여기서 생성
    this.toggleMenu();
  }

  async renderCollapsibleMenu() {
    const collapsibleCategoryInfo = await this.fetcher.getCategoryData(
      PATH.collapsible
    );
    const collapMenuTemplate = this.templateGenerator.generateCollapsibleMenu(
      collapsibleCategoryInfo
    );
    renderChildren(this.sideListMain, collapMenuTemplate);

    this.openSubMenu(this.sideListMain, collapsibleCategoryInfo);
  }

  async renderShoppingCategory() {
    const shoppingCategoryInfo = await this.fetcher.getCategoryData(
      PATH.shopping
    );
    const shoppingMenuTemplate =
      this.templateGenerator.generateMainMenu(shoppingCategoryInfo);
    renderChildren(this.sideListShopping, shoppingMenuTemplate);

    this.openSubMenu(this.sideListShopping, shoppingCategoryInfo);
  }

  async renderDigitalCategory() {
    const digitalCategoryInfo = await this.fetcher.getCategoryData(
      PATH.digital
    );
    const digitalMenuTemplate =
      this.templateGenerator.generateMainMenu(digitalCategoryInfo);
    renderChildren(this.sideListDigital, digitalMenuTemplate);

    this.openSubMenu(this.sideListDigital, digitalCategoryInfo);
  }

  // TODO: 아래부터 이벤트 핸들러 등록 로직 전반 개선하기, 이벤트 핸들러 분리하기, 위의 렌더링 함수에서 openSubMenu 함수 제거하기
  openSubMenu(node, menuObj) {
    node.addEventListener('click', e => {
      if (e.target.dataset.id) {
        return;
      } else {
        const keyText = e.target.innerText;
        const subTemplate = this.templateGenerator.generateSubMenu(
          menuObj,
          keyText
        );
        renderChildren(this.sideListSub, subTemplate);
        this.sideBox.classList.add('translateX');
      }
    });
  }

  toggleSidebar() {
    document.addEventListener('click', e => {
      if (e.target.closest('.hamburger-btn')) {
        layerOpenState.sidebar = true;
        this.sideArea.classList.add('active');
        this.closeBtn.classList.remove('close');
        handleDimming();
      } else if (!e.target.closest('.side')) {
        layerOpenState.sidebar = false;
        this.sideArea.classList.remove('active');
        this.closeBtn.classList.add('close');
        handleDimming();
      }
    });
  }

  toggleMenu() {
    this.sideViewAll.addEventListener('click', () => {
      this.sideListMain.classList.remove('compressed');
    });
    const sideViewSimple = $('.side__view-simple', this.sideArea);
    sideViewSimple.addEventListener('click', () => {
      this.sideListMain.classList.add('compressed');
    });
  }

  closeSubMenu() {
    this.sideListSub.addEventListener('click', e => {
      if (e.target.dataset.id === 'close-sub') {
        this.sideBox.classList.remove('translateX');
      }
    });
  }
}
