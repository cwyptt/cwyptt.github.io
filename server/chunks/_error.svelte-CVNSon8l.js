import { c as create_ssr_component, a as subscribe, e as escape } from './ssr-CpH-d1Zk.js';
import { p as page } from './stores-BVb3S_sM.js';

const css = {
  code: "div.svelte-s37m9n{height:calc(100vh - 70px);display:flex;justify-content:center;align-items:center;flex-direction:column}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let status;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  status = $page.status;
  $$unsubscribe_page();
  return `<div class="wrapper svelte-s37m9n"><h1>${escape(status)}</h1> <h4>${escape($page.error?.message)}</h4> </div>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-CVNSon8l.js.map
