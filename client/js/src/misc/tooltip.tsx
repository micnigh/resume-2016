import $ from "jquery";

export let enableTooltip = (node: HTMLElement) => {
  $("[title]", node).tooltip({
    container: `body`,
    placement: (tip, e) => {
      return $(e).data("tooltip-placement") || "top";
    },
  }).tooltip("enable");
};

export let disableTooltip = (node: HTMLElement) => {
  $("[title]", node).tooltip("disable");
};

export default enableTooltip;
