import { c as create_ssr_component, v as validate_component, a as subscribe, o as onDestroy, b as add_styles, d as merge_ssr_styles, e as escape } from './ssr-CpH-d1Zk.js';
import { w as writable } from './index2-CoS0Rmpa.js';

const cursorVisible = writable(true);
const css$1 = {
  code: ".raindrop.svelte-1p9n17w{left:0;top:0;height:30px;width:30px;position:fixed;z-index:1000;opacity:0;pointer-events:none;transition:0.3s opacity var(--bezier-one), 0.3s scale var(--bezier-one);background:transparent;border:1px solid var(--white-two);border-radius:50% 0 50% 50%;overflow:hidden}@media(pointer: coarse){.raindrop.svelte-1p9n17w{display:none}}.water-droplet.svelte-1p9n17w{position:absolute;width:10px;height:10px;background:transparent;border:1px solid var(--white-two);border-radius:50%;opacity:0.5}",
  map: null
};
const Cursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cursorVisible, $$unsubscribe_cursorVisible;
  $$unsubscribe_cursorVisible = subscribe(cursorVisible, (value) => $cursorVisible = value);
  let mouseX;
  let mouseY;
  let opacity;
  let scale = 1;
  let dropletX = 15;
  let dropletY = 15;
  let animationFrame;
  onDestroy(() => {
    cancelAnimationFrame(animationFrame);
  });
  $$result.css.add(css$1);
  $$unsubscribe_cursorVisible();
  return ` <div class="raindrop svelte-1p9n17w"${add_styles(merge_ssr_styles("transform: translateX(" + escape(mouseX - 15, true) + "px) translateY(" + escape(mouseY - 15, true) + "px) scale(" + escape(scale, true) + ") rotate(-90deg)", { "opacity": $cursorVisible ? opacity : 0 }))}><div class="water-droplet svelte-1p9n17w" style="${"transform: translate(" + escape(dropletX - 15, true) + "px, " + escape(dropletY - 15, true) + "px)"}"></div> </div>`;
});
const css = {
  code: ".loading.svelte-1cwcysj .svelte-1cwcysj{transition:none}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1k5bjoy_START --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="preload" href="/sounds/rain-excuse-consuela.mp3" as="audio" type="audio/mpeg">${$$result.title = `<title>Cwypt | Portfolio</title>`, ""}<!-- HEAD_svelte-1k5bjoy_END -->`, ""}  ${validate_component(Cursor, "Cursor").$$render($$result, {}, {}, {})} <span class="${["svelte-1cwcysj", "loading"].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </span>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DJLsRXcr.js.map
