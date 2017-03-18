class controller {
  constructor () {}
}

export default {
  transclude: true,
  controller: controller,
  template: `
    <a class="mbm-surprise-button" role="button">
      <ng-transclude></ng-transclude>
    </a>
  `
};

