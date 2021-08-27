import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { until } from 'protractor';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';


//Menu Bar
export interface Menu {
  headTitle?: string;
  title?: string;
  path?: string;
  icon?: string;
  type?: string;
  badgeClass?: string;
  badgeValue?: string;
  active?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: 'root'
})
export class NavService implements OnDestroy {

  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

  public megaMenu: boolean = false;
  public megaMenuCollapse: boolean = window.innerWidth < 1199 ? true : false;
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
  constructor(
    private router: Router
  ) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize').pipe(
      debounceTime(1000),
      takeUntil(this.unsubscriber)
    ).subscribe((evt: any) => {
      this.setScreenWidth(evt.target.innerWidth);
      if (evt.target.innerwidth < 991) {
        this.collapseSidebar = false;
        this.megaMenu = false;
      }

      if (evt.target.innerWidth < 1199) {
        this.megaMenuCollapse = true;
      }
    });
    if (window.innerWidth < 991) {
      this.router.events.subscribe(event => {
        this.collapseSidebar = false;
        this.megaMenu = false;
      })
    }

  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  ngOnDestroy() {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  MENUITEMS: Menu[] = [
    //title
    { headTitle: 'dashboard' },
    {
      path: '/dashboard', title: 'Dashboard', type: 'link', icon: 'ti-home', active: true
    },
    {
      title: 'Crypto Currencies', icon: 'ti-wallet', type: 'sub', active: false,
      children: [
        { path: '/crypto/crypto-dashboard', title: 'Dashboard', type: 'link' },
        { path: '/crypto/marketcap', title: 'Marketcap', type: 'link' },
        { path: '/crypto/currency-exchange', title: 'Currency Exchange', type: 'link' },
        { path: '/crypto/buy-sell', title: 'Buy & Sell', type: 'link' },
        { path: '/crypto/wallet', title: 'Wallet', type: 'link' },
        { path: '/crypto/transactions', title: 'Transactions', type: 'link' },
      ]
    },
    {
      title: 'E-Commerce', icon: 'ti-shopping-cart-full', type: 'sub', active: false,
      children: [
        { path: '/ecommerce/ecommerce-dashboard', title: 'Dashboard', type: 'link' },
        { path: '/ecommerce/products', title: 'Products', type: 'link' },
        { path: '/ecommerce/products-details', title: 'Products Details', type: 'link' },
        { path: '/ecommerce/cart', title: 'Cart', type: 'link' },
        { path: '/ecommerce/checkout', title: 'Checkout', type: 'link' },
        { path: '/ecommerce/orders', title: 'Orders', type: 'link' },
        { path: '/ecommerce/account', title: 'Account', type: 'link' },
      ]
    },


    { headTitle: 'applications' },
    {
      path: '/widgets', title: 'Widgets', type: 'link', icon: 'ti-server', active: false
    },
    {
      title: 'Mail', icon: 'ti-email', type: 'sub', badgeClass: 'badge-warning', badgeValue: '2', active: false,
      children: [
        { path: '/mail/mail-inbox', title: 'Mail - Inbox', type: 'link' },
        { path: '/mail/view-mail', title: 'View - Mail', type: 'link' },
      ]
    },
    {
      title: 'Apps', icon: 'ti-write', type: 'sub', active: false,
      children: [
        { path: '/apps/chat', title: 'Chat', type: 'link' },
        { path: '/apps/cards', title: 'Cards', type: 'link' },
        { path: '/apps/calendar', title: 'Calendar', type: 'link' },
        { path: '/apps/contacts', title: 'Contacts', type: 'link' },
      ]
    },
    {
      title: 'Icons', icon: 'ti-face-smile', type: 'sub', active: false,
      children: [
        { path: '/icons/font-awesome', title: 'Font Awesome', type: 'link' },
        { path: '/icons/material-design', title: 'Material Design Icons', type: 'link' },
        { path: '/icons/simple-line', title: 'Simple Line Icons', type: 'link' },
        { path: '/icons/feather', title: 'Feather Icons', type: 'link' },
        { path: '/icons/ionic', title: 'Ionic Icons', type: 'link' },
        { path: '/icons/flag', title: 'Flag Icons', type: 'link' },
        { path: '/icons/pe7', title: 'Pe7 Icons', type: 'link' },
        { path: '/icons/themify', title: 'Themify Icons', type: 'link' },
        { path: '/icons/typicons', title: 'Typicons Icons', type: 'link' },
        { path: '/icons/weather', title: 'Weather Icons', type: 'link' },
        { path: '/icons/material', title: 'Material SVG', type: 'link' },
      ]
    },
    {
      title: 'Maps', icon: 'ti-map-alt', type: 'sub', badgeClass: 'badge-secondary', badgeValue: '2', active: false,
      children: [
        { path: '/maps/leaflet', title: 'Leaflet Maps', type: 'link' },
        { path: '/maps/google', title: 'Google Maps', type: 'link' },
      ]
    },
    {
      title: 'Tables', icon: 'ti-agenda', type: 'sub', active: false,
      children: [
        { path: '/tables/basic', title: 'Basic Tables', type: 'link' },
        { path: '/tables/data', title: 'Data Tables', type: 'link' },
      ]
    },


    { headTitle: 'components' },
    {
      title: 'Elements', icon: 'ti-package', type: 'sub', active: false,
      children: [
        { path: '/elements/alerts', title: 'Alerts', type: 'link' },
        { path: '/elements/avatar', title: 'Avatars', type: 'link' },
        { path: '/elements/breadcrumb', title: 'Breadcrumb', type: 'link' },
        { path: '/elements/buttons', title: 'Buttons', type: 'link' },
        { path: '/elements/badge', title: 'Badge', type: 'link' },
        { path: '/elements/dropdown', title: 'Dropdown', type: 'link' },
        { path: '/elements/thumbnails', title: 'Thumbnails', type: 'link' },
        { path: '/elements/listgroup', title: 'List Group', type: 'link' },
        { path: '/elements/navigation', title: 'Navigation', type: 'link' },
        { path: '/elements/pagination', title: 'Pagination', type: 'link' },
        { path: '/elements/popover', title: 'Popover', type: 'link' },
        { path: '/elements/progress', title: 'Progress', type: 'link' },
        { path: '/elements/spinners', title: 'Spinners', type: 'link' },
        { path: '/elements/media-objects', title: 'Media Object', type: 'link' },
        { path: '/elements/typhography', title: 'Typhography', type: 'link' },
        { path: '/elements/tooltips', title: 'Tooltips', type: 'link' },
        { path: '/elements/toast', title: 'Toast', type: 'link' },
        { path: '/elements/tags', title: 'Tags', type: 'link' },
      ]
    },
    {
      title: 'Advanced UI', icon: 'ti-briefcase', type: 'sub', active: false,
      children: [
        { path: '/advanced-ui/accordion', title: 'Accordion', type: 'link' },
        { path: '/advanced-ui/carousel', title: 'Carousel', type: 'link' },
        { path: '/advanced-ui/collapse', title: 'Collapse', type: 'link' },
        { path: '/advanced-ui/modals', title: 'Modals', type: 'link' },
        { path: '/advanced-ui/timeline', title: 'Timeline', type: 'link' },
        { path: '/advanced-ui/draggable-cards', title: 'Draggable-Cards', type: 'link' },
        { path: '/advanced-ui/sweet-alerts', title: 'Sweet Alerts', type: 'link' },
        { path: '/advanced-ui/ratings', title: 'Ratings', type: 'link' },
        { path: '/advanced-ui/search', title: 'Search', type: 'link' },
        { path: '/advanced-ui/userlist', title: 'Userlist', type: 'link' },
        { path: '/advanced-ui/blog', title: 'Blog', type: 'link' },
      ]
    },


    { headTitle: 'Forms & Charts' },
    {
      title: 'Forms', icon: 'ti-receipt', type: 'sub', badgeClass: 'badge-info', badgeValue: '6', active: false,
      children: [
        { path: '/forms/elements', title: 'Form Elements', type: 'link' },
        { path: '/forms/advanced', title: 'Advanced Forms', type: 'link' },
        { path: '/forms/layouts', title: 'Form Layouts', type: 'link' },
        { path: '/forms/validation', title: 'Form Validation', type: 'link' },
        { path: '/forms/wizards', title: 'Form Wizards', type: 'link' },
        { path: '/forms/editors', title: 'Form Editors', type: 'link' },
      ]
    },
    {
      title: 'Charts', icon: 'ti-bar-chart-alt', type: 'sub', badgeClass: 'badge-danger', badgeValue: '5', active: false,
      children: [
        { path: '/charts/apex', title: 'Apex', type: 'link' },
        { path: '/charts/chartjs', title: 'Chart.js', type: 'link' },
        { path: '/charts/echart', title: 'Echart', type: 'link' },
        { path: '/charts/chartlist', title: 'Chartist', type: 'link' },
      ]
    },


    { headTitle: 'Other Pages' },
    {
      title: 'Pages', icon: 'ti-palette', type: 'sub', active: false,
      children: [
        { path: '/pages/profile', title: 'Profile', type: 'link' },
        { path: '/pages/invoice', title: 'Invoice', type: 'link' },
        { path: '/pages/pricing', title: 'Pricing', type: 'link' },
        { path: '/pages/gallery', title: 'Gallery', type: 'link' },
        { path: '/pages/faqs', title: 'Faqs', type: 'link' },
        { path: '/alert-pages/success-message', title: 'Success Message', type: 'link' },
        { path: '/alert-pages/danger-message', title: 'Danger Message', type: 'link' },
        { path: '/alert-pages/warning-message', title: 'Warning Message', type: 'link' },
        { path: '/pages/empty-page', title: 'Empty Page', type: 'link' },
      ]
    },
    {
      title: 'Utilities', icon: 'ti-shield', type: 'sub', active: false,
      children: [
        { path: '/utilities/background', title: 'Background', type: 'link' },
        { path: '/utilities/border', title: 'Border', type: 'link' },
        { path: '/utilities/display', title: 'Display', type: 'link' },
        { path: '/utilities/flex', title: 'Flex', type: 'link' },
        { path: '/utilities/height', title: 'Height', type: 'link' },
        { path: '/utilities/margin', title: 'Margin', type: 'link' },
        { path: '/utilities/padding', title: 'Padding', type: 'link' },
        { path: '/utilities/position', title: 'Position', type: 'link' },
        { path: '/utilities/width', title: 'Width', type: 'link' },
        { path: '/utilities/extras', title: 'Extras', type: 'link' },
      ]
    },
    {
      title: 'Custom Pages', icon: 'ti-lock', type: 'sub', active: false,
      children: [
        { path: '/custom/signin', title: 'Sign In', type: 'link' },
        { path: '/custom/signup', title: 'Sign Up', type: 'link' },
        { path: '/custom/forgot-password', title: 'Forgot Password', type: 'link' },
        { path: '/custom/reset-password', title: 'Reset Password', type: 'link' },
        { path: '/custom/lockscreen', title: 'Lock Screen', type: 'link' },
        { path: '/custom-pages/under-construction', title: 'Under Construction', type: 'link' },
        { path: '/custom-pages/404-Error', title: '404 Error', type: 'link' },
        { path: '/custom-error/500-Error', title: '500 Error', type: 'link' },
      ]
    },
    {
      title: 'Submenus', icon: 'ti-panel', type: 'sub', active: false,
      children: [
        {
         title: 'Level 1', type: 'sub',
          children: [
            { title: 'Level 1.0', type: 'link' },
            { title: 'Level 1.1', type: 'link' },
            {
              title: 'Level 1.2', type: 'sub',
              children: [
                { title: 'Level 1.2.1', type: 'link' },
                { title: 'Level 1.2.2', type: 'link' },
                { title: 'Level 1.2.3', type: 'link' },
              ]
            },
          ]
        },
        { title: 'Level 2', type: 'link' },
        { title: 'Level 3', type: 'link' },
      ]
    }
  ];

  //array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
