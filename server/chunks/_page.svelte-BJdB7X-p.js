import { c as create_ssr_component, v as validate_component, e as escape, a as subscribe, g as add_attribute, b as add_styles, h as null_to_empty } from './ssr-CpH-d1Zk.js';
import { p as page } from './stores-BVb3S_sM.js';

const css$a = {
  code: "li.svelte-1l3g7ha.svelte-1l3g7ha{text-decoration:none;list-style:none}button.svelte-1l3g7ha.svelte-1l3g7ha{background-color:transparent;border:none;color:var(--white-two);font-size:1.1rem;user-select:none;display:flex;align-items:center;gap:0.75rem;padding:13px 25px;border-radius:100px;cursor:none;transition:background-color 0.3s var(--bezier-one), transform 0.3s var(--bezier-one)}button.svelte-1l3g7ha.svelte-1l3g7ha:hover{background-color:var(--neutral-four)}h5.svelte-1l3g7ha.svelte-1l3g7ha{transition:all 0.3s var(--bezier-one)}.icon-container.svelte-1l3g7ha.svelte-1l3g7ha{display:none}button.svelte-1l3g7ha:hover>h5.svelte-1l3g7ha,.selected.svelte-1l3g7ha img.svelte-1l3g7ha,.selected.svelte-1l3g7ha h5.svelte-1l3g7ha{color:var(--white);opacity:1}img.svelte-1l3g7ha.svelte-1l3g7ha{display:flex;align-items:center;justify-self:center;opacity:0.5;height:24px;width:24px;transition:all 0.5s var(--bezier-one)}h5.svelte-1l3g7ha.svelte-1l3g7ha{opacity:0.8}button.svelte-1l3g7ha:active img.svelte-1l3g7ha,button.svelte-1l3g7ha:hover img.svelte-1l3g7ha{opacity:1}@media screen and (max-width: 868px){img.svelte-1l3g7ha.svelte-1l3g7ha{transform:scale(0.95);margin-right:0;transition-delay:0.3s}h5.svelte-1l3g7ha.svelte-1l3g7ha{transition-delay:0.5s}.icon-container.svelte-1l3g7ha.svelte-1l3g7ha{display:block;padding:6px 24px;border-radius:100px;margin-bottom:0.4rem;transition:all 0.5s var(--bezier-one);transition-delay:0.3s}button.svelte-1l3g7ha.svelte-1l3g7ha{flex-direction:column;gap:0;font-size:0.9rem;margin-bottom:0}button.svelte-1l3g7ha.svelte-1l3g7ha:hover{background-color:transparent}button.svelte-1l3g7ha:hover .icon-container.svelte-1l3g7ha,.selected.svelte-1l3g7ha .icon-container.svelte-1l3g7ha{background-color:var(--brighter-opacity)}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { href = "#" } = $$props;
  let { section = "home" } = $$props;
  let { isSelected } = $$props;
  $page.url.pathname;
  if ($$props.href === undefined && $$bindings.href && href !== undefined)
    $$bindings.href(href);
  if ($$props.section === undefined && $$bindings.section && section !== undefined)
    $$bindings.section(section);
  if ($$props.isSelected === undefined && $$bindings.isSelected && isSelected !== undefined)
    $$bindings.isSelected(isSelected);
  $$result.css.add(css$a);
  $$unsubscribe_page();
  return `<li class="${["svelte-1l3g7ha", isSelected ? "selected" : ""].join(" ").trim()}"><button class="svelte-1l3g7ha"><div class="icon-container svelte-1l3g7ha"><img src="${"icons/" + escape(section === "/" ? "home" : section, true) + ".svg"}"${add_attribute("alt", section, 0)} class="svelte-1l3g7ha"></div> <h5 class="svelte-1l3g7ha">${escape(section)}</h5></button> </li>`;
});
const css$9 = {
  code: "nav.svelte-1rmippg.svelte-1rmippg{display:flex;align-items:center;justify-content:center}div.svelte-1rmippg.svelte-1rmippg{width:100%;text-align:center;align-items:center;position:fixed;top:0;padding:1.25rem 0;z-index:15;background:transparent;backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);background-blend-mode:overlay;transition:all 0.5s ease}div.svelte-1rmippg ul.svelte-1rmippg{display:flex;gap:4rem;justify-content:center;position:relative}@media(min-width: 868px){div.svelte-1rmippg.svelte-1rmippg{width:40rem;border-radius:12px}.scrolled.svelte-1rmippg.svelte-1rmippg{border-bottom:1.5px solid var(--brighter-opacity);padding:0.5rem 0;margin-top:0.5rem;width:34rem;background-color:var(--neutral-five);box-shadow:0 15 8 -10 rgba(0, 0, 0, 0.4)}.scrolled.svelte-1rmippg.svelte-1rmippg::before{opacity:0}}@media(max-width: 868px){div.svelte-1rmippg.svelte-1rmippg{bottom:0;top:auto;padding:0}div.svelte-1rmippg.svelte-1rmippg::before{background-color:#1a1616;animation:none}div.svelte-1rmippg ul.svelte-1rmippg{display:flex;justify-content:space-evenly;gap:2vw}}",
  map: null
};
const NavHost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  $$result.css.add(css$9);
  return `<nav class="svelte-1rmippg"><div class="${["svelte-1rmippg", ""].join(" ").trim()}"><ul class="svelte-1rmippg">${validate_component(Nav, "Nav").$$render(
    $$result,
    {
      href: "#home",
      section: "/",
      isSelected: y < 350
    },
    {},
    {}
  )} ${validate_component(Nav, "Nav").$$render(
    $$result,
    {
      href: "#about",
      section: "about",
      isSelected: y > 350
    },
    {},
    {}
  )} ${validate_component(Nav, "Nav").$$render(
    $$result,
    {
      href: "#work",
      section: "work",
      isSelected: y > 675
    },
    {},
    {}
  )}</ul></div></nav>  `;
});
const css$8 = {
  code: "@keyframes svelte-1g8zu2z-float{0%{transform:translateY(7px)}50%{transform:translateY(-7px)}100%{transform:translateY(7px)}}.img.svelte-1g8zu2z{border-radius:48px;width:425px;height:400px;z-index:1;display:block;transition:width 0.4s var(--bezier-one), transform 0.4s var(--bezier-one);align-self:start;background-color:var(--neutral-one);background-size:cover;background-position:center;background-repeat:no-repeat}@media(max-width: 768px){.img.svelte-1g8zu2z{display:none}}@media(max-width: 1240px){.img.svelte-1g8zu2z{width:clamp(340px, 40vw, 425px);height:clamp(300px, 40vw, 400px)}}.img-container.svelte-1g8zu2z{z-index:1;animation:svelte-1g8zu2z-float 6s ease-in-out infinite;animation-play-state:running}@media(max-width: 1240px){.img-container.svelte-1g8zu2z{display:flex;justify-content:center}}",
  map: null
};
const HeroImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xRotation;
  let yRotation;
  $$result.css.add(css$8);
  return `<div class="img-container svelte-1g8zu2z"><div role="img" aria-label="Cat looking out the window as it rains" class="img svelte-1g8zu2z"${add_styles({
    "background-image": `url(cat_window_rain.gif)`,
    "transform": `perspective(500px) ${""} rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
  })}></div> </div>`;
});
const css$7 = {
  code: 'button.svelte-10il5k0{border-radius:16px;display:flex;position:relative;flex-direction:row;width:max-content;cursor:pointer;background-color:var(--neutral-one);transition:filter 0.2s var(--bezier-one), transform 0.5s var(--bezier-one);user-select:none;-webkit-user-select:none;margin:0;padding:1rem 2rem;color:var(--brighter);font-weight:300;font-size:1.6rem;letter-spacing:-0.075em;border:1px solid var(--neutral-four)}button.svelte-10il5k0:active{transform:scale(95%)}button.svelte-10il5k0:hover{filter:brightness(110%);cursor:none}@media screen and (max-width: 868px){button.svelte-10il5k0{text-align:center;justify-content:center;padding:1rem 2rem;width:100%;font-size:clamp(1.1rem, 2vw, 1.9rem)}}.button-with-side.svelte-10il5k0{padding:1rem 2rem 1rem 3rem}.side.svelte-10il5k0{position:absolute;border-radius:16px 0 0 16px;top:0;left:0;content:"";height:100%;width:1.6rem;background-color:var(--brighter)}@media screen and (max-width: 868px){.side.svelte-10il5k0{display:none}}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { side = false } = $$props;
  if ($$props.side === undefined && $$bindings.side && side !== undefined)
    $$bindings.side(side);
  $$result.css.add(css$7);
  return `<button class="${["svelte-10il5k0", side ? "button-with-side" : ""].join(" ").trim()}"><div class="${["svelte-10il5k0", side ? "side" : ""].join(" ").trim()}"></div> ${slots.default ? slots.default({}) : ``} </button>`;
});
const css$6 = {
  code: '.tooltip-wrapper.svelte-wno0w5.svelte-wno0w5{position:relative;display:inline-block}.tooltip-wrapper.svelte-wno0w5:hover .tooltip.svelte-wno0w5{opacity:1;visibility:initial;margin-top:-8px}.tooltip.svelte-wno0w5.svelte-wno0w5{position:absolute;display:inline-block;white-space:nowrap;opacity:0;visibility:hidden;transition:opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, margin-top 0.2s ease-in-out;left:50%;top:0;line-height:normal;transform:translate(-50%, -120%);padding:0.15rem 0.5rem;border-radius:6px;background-color:var(--brighter);color:var(--neutral-one);font-size:0.9rem;font-family:var(--font-two), serif;font-weight:300;letter-spacing:-0.075em}.tooltip.svelte-wno0w5.svelte-wno0w5::after{border-left:solid transparent 10px;border-right:solid transparent 10px;border-top:solid var(--brighter) 10px;bottom:-8px;content:" ";height:0;width:0;left:50%;margin-left:-10px;position:absolute}.tooltip.active.svelte-wno0w5.svelte-wno0w5{opacity:1;visibility:initial;margin-top:-8px}',
  map: null
};
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tip = "" } = $$props;
  let { active = false } = $$props;
  if ($$props.tip === undefined && $$bindings.tip && tip !== undefined)
    $$bindings.tip(tip);
  if ($$props.active === undefined && $$bindings.active && active !== undefined)
    $$bindings.active(active);
  $$result.css.add(css$6);
  return ` ${`${slots.default ? slots.default({}) : ``}`}`;
});
const css$5 = {
  code: "a.svelte-1ov8zhe.svelte-1ov8zhe{transition:all 0.3s var(--bezier-one);display:flex;justify-content:center;align-items:center;width:68px;height:68px;background-color:transparent;border:none;border-radius:12px;cursor:none}a.small.svelte-1ov8zhe.svelte-1ov8zhe{width:45px;height:45px}a.small.svelte-1ov8zhe img.svelte-1ov8zhe{height:32px;width:32px}img.svelte-1ov8zhe.svelte-1ov8zhe{height:46px;width:46px;opacity:0.7;transition:all 0.3s var(--bezier-one)}div.svelte-1ov8zhe.svelte-1ov8zhe{transition:all 0.3s var(--bezier-one)}div.svelte-1ov8zhe:hover img.svelte-1ov8zhe{opacity:1}div.svelte-1ov8zhe:hover a.svelte-1ov8zhe{background-color:var(--neutral-one)}div.svelte-1ov8zhe.svelte-1ov8zhe:active{transform:scale(98%)}",
  map: null
};
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "Github" } = $$props;
  let { link = "" } = $$props;
  let { tip = "" } = $$props;
  let { size = "normal" } = $$props;
  if ($$props.icon === undefined && $$bindings.icon && icon !== undefined)
    $$bindings.icon(icon);
  if ($$props.link === undefined && $$bindings.link && link !== undefined)
    $$bindings.link(link);
  if ($$props.tip === undefined && $$bindings.tip && tip !== undefined)
    $$bindings.tip(tip);
  if ($$props.size === undefined && $$bindings.size && size !== undefined)
    $$bindings.size(size);
  $$result.css.add(css$5);
  return `${validate_component(Tooltip, "Tooltip").$$render($$result, { tip }, {}, {
    default: () => {
      return `<div class="svelte-1ov8zhe"><a${add_attribute("href", link, 0)} target="_blank" rel="noreferrer" draggable="false" class="${escape(null_to_empty(size), true) + " svelte-1ov8zhe"}"><img src="${"icons/" + escape(icon, true) + ".svg"}"${add_attribute("alt", icon, 0)} class="svelte-1ov8zhe"></a></div>`;
    }
  })} ${``}`;
});
const css$4 = {
  code: ".socials-container.svelte-1aq6saw{display:flex;align-items:center;gap:0.75rem}.main-socials.svelte-1aq6saw{display:flex;gap:0.75rem}.separator.svelte-1aq6saw{color:#228eb5;opacity:0.5;font-weight:200;font-size:1.5rem;padding:0 0.5rem;user-select:none;display:flex;align-items:center}.resume-icon.svelte-1aq6saw{margin-left:0.25rem}@media screen and (max-width: 768px){.separator.svelte-1aq6saw{padding:0 0.25rem}}",
  map: null
};
const Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "normal" } = $$props;
  if ($$props.size === undefined && $$bindings.size && size !== undefined)
    $$bindings.size(size);
  $$result.css.add(css$4);
  return `<div class="socials-container svelte-1aq6saw"><div class="main-socials svelte-1aq6saw">${validate_component(Social, "Social").$$render(
    $$result,
    {
      icon: "github",
      tip: "cwyptt",
      link: "https://github.com/cwyptt",
      size
    },
    {},
    {}
  )}  ${validate_component(Social, "Social").$$render(
    $$result,
    {
      icon: "linkedin",
      tip: "alexdavidhanson",
      link: "https://linkedin.com/in/alexdavidhanson",
      size
    },
    {},
    {}
  )} ${validate_component(Social, "Social").$$render(
    $$result,
    {
      icon: "email",
      tip: "alex.d.hanson@outlook.com",
      link: "mailto:alex.d.hanson@outlook.com",
      size
    },
    {},
    {}
  )}</div> <div class="separator svelte-1aq6saw" aria-hidden="true" data-svelte-h="svelte-kpl3u1">|</div> <div class="resume-icon svelte-1aq6saw">${validate_component(Social, "Social").$$render(
    $$result,
    {
      icon: "resume",
      tip: "View Resume",
      link: "/api/v1/resume",
      size
    },
    {},
    {}
  )}</div> </div>`;
});
const css$3 = {
  code: '@charset "UTF-8";@keyframes svelte-fxsscf-float{0%{transform:translateY(0)}50%{transform:translateY(-5px)}100%{transform:translateY(0)}}@keyframes svelte-fxsscf-glitch-rgb{0%,100%{text-shadow:none;transform:scale(2.4) rotate(90deg);opacity:1;clip-path:inset(25% 0 15% 0);color:#79c8e8}1%{content:"¢";text-shadow:-1px 0 #ff0000, -1px 5px #00ff00, 10px -2px #0000ff;transform:scale(1.2) rotate(180deg);clip-path:inset(25% 0 90% 0);opacity:0.9;color:cyan}2%{content:"$";text-shadow:-3px 0 #ff0000, 3px 3px #00ff00, -2px -2px #0000ff;transform:scale(0.5) rotate(-55deg);clip-path:inset(40% 0 40% 0);opacity:0.9;color:cyan}3%{content:"¢";text-shadow:-5px 2px #ff0000, 8px 1px #00ff00, -3px -2px #0000ff;transform:scale(1.5) rotate(80deg);clip-path:inset(40% 0 40% 0);opacity:1.2;color:cyan}4%{content:"¢";text-shadow:4px -3px #ff0000, -4px 0 #00ff00, 2px 2px #0000ff;transform:scale(2.5) rotate(190deg);clip-path:inset(50% 0 100% 0);opacity:0.65}5%{content:"¢";text-shadow:-2px 2px #ff0000, 3px 5px #00ff00, 0px 5px #0000ff;transform:scale(1.6) rotate(-5deg);clip-path:inset(40% 50% 40% 0);opacity:1;color:cyan}6%{content:"$";text-shadow:-3px 2px #ff0000, -2px -4px #00ff00, 4px 0 #0000ff;transform:scale(3.2) rotate(-15deg);clip-path:inset(10% 0 20% 0);opacity:0.95}7%{content:"$";text-shadow:10px 3px #ff0000, 3px 3px #00ff00, -6px -5px #0000ff;transform:scale(0.4) rotate(120deg);clip-path:inset(20% 0 80% 0);opacity:0.6;color:#5ca0bf}8%{content:"$";text-shadow:-4px 3px #ff0000, 3px -3px #00ff00, -3px 2px #0000ff;transform:scale(6.4) rotate(-75deg);clip-path:inset(10% 0 70% 0);opacity:0.85}9%{content:"¢";text-shadow:-1px 5px #ff0000, 1px -2px #00ff00, -5px 2px #0000ff;transform:scale(1);clip-path:inset(10% 0 70% 0);opacity:0}10%{content:"¢";text-shadow:none;transform:scale(1);opacity:1;clip-path:none;color:#79c8e8}}section.svelte-fxsscf.svelte-fxsscf{scroll-margin-top:20rem;display:flex;justify-content:space-between;align-items:center;margin-bottom:5.75rem;margin-top:7rem}@media screen and (max-width: 868px){section.svelte-fxsscf.svelte-fxsscf{margin-top:4rem}}@media screen and (max-width: 768px){section.svelte-fxsscf.svelte-fxsscf{margin-bottom:2.75rem}}@media screen and (max-width: 500px){section.svelte-fxsscf.svelte-fxsscf{display:block}}.socials.svelte-fxsscf.svelte-fxsscf{margin-top:1rem;margin-bottom:1.7rem}h1.svelte-fxsscf .glitch.svelte-fxsscf{display:inline-block;position:relative;color:#5ca0bf;animation:svelte-fxsscf-glitch-rgb 5s steps(1) infinite, svelte-fxsscf-float 3s ease-in-out infinite}h1.svelte-fxsscf .glitch.svelte-fxsscf::before,h1.svelte-fxsscf .glitch.svelte-fxsscf::after{content:"¢";position:fixed;background-color:#2a5569;top:2.5px;left:0;opacity:0;animation:svelte-fxsscf-glitch-rgb 5s steps(1) infinite, svelte-fxsscf-float 2s ease-in-out infinite}h1.svelte-fxsscf .glitch.svelte-fxsscf::before{color:#ff0000;position:absolute;transform:rotate(-90deg);animation-delay:0.035s}h1.svelte-fxsscf .glitch.svelte-fxsscf::after{color:#00ff00;position:absolute;transform:rotate(180deg);animation-delay:-0.2s}h1.svelte-fxsscf.svelte-fxsscf::before{position:relative;height:300px;font-size:100px;content:"⌥";font-weight:700;z-index:-1;user-select:none;transform:translate(-125%, -50%);-webkit-text-stroke:2px var(--white);color:transparent;opacity:0.25;letter-spacing:-0.1em;position:absolute}@media screen and (max-width: 1240px){h1.svelte-fxsscf.svelte-fxsscf{min-height:0;font-size:clamp(4rem, 10vw, 6.25rem)}}',
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="home" class="wrapper svelte-fxsscf"><div> <h1 class="svelte-fxsscf" data-svelte-h="svelte-wghrt6"><span class="glitch svelte-fxsscf" data-text="¢">¢</span>wypt</h1> <h4 data-svelte-h="svelte-7bw84s">Salesforce Developer | Software Developer | IT Support</h4> <h5 data-svelte-h="svelte-ev9jue">Linux, Windows, &amp; Database Administration, <br>Software Development, Audio Engineering, and more.</h5> <div class="socials svelte-fxsscf">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})} </div> ${validate_component(Button, "Button").$$render($$result, { side: true }, {}, {
    default: () => {
      return `Check out my work ↓`;
    }
  })}</div> ${validate_component(HeroImage, "HeroImage").$$render($$result, {}, {}, {})} </section>`;
});
const css$2 = {
  code: '@charset "UTF-8";section.svelte-kvci40{margin-bottom:6rem;display:grid;gap:4.5rem;grid-template-columns:1fr 1fr;align-items:center}.text.svelte-kvci40{position:relative;line-height:1.75rem}span.svelte-kvci40{font-weight:400;font-family:var(--font-two), serif;font-size:0.9rem;background-color:var(--neutral-one);border-radius:7px;color:var(--brighter);padding:0.2rem 0.5rem 0.2rem;width:fit-content}a.svelte-kvci40{text-decoration:none}.text.svelte-kvci40::before{height:300px;font-size:150px;content:"╭";font-weight:700;z-index:-1;user-select:none;transform:translate(630%, -5%);-webkit-text-stroke:2px var(--white);color:transparent;opacity:0.22;letter-spacing:-0.075em;position:absolute}@media(max-width: 868px){section.svelte-kvci40{display:flex;flex-direction:column;align-items:normal}}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let getAge = () => {
    let birthDate = /* @__PURE__ */ new Date("2001/09/17");
    const ageMs = Date.now() - birthDate.getTime();
    return (ageMs / 31536e6).toFixed(8);
  };
  let age = getAge();
  setInterval(
    () => {
      age = getAge();
    },
    1e3
  );
  $$result.css.add(css$2);
  return `<section id="about" class="wrapper svelte-kvci40"><div class="text svelte-kvci40"><h3 data-svelte-h="svelte-cpebvc">Bio</h3> <p>Hey, my name is Alex and I&#39;m ${validate_component(Tooltip, "Tooltip").$$render($$result, { tip: age }, {}, {
    default: () => {
      return `<span class="svelte-kvci40">${escape(Math.floor(Number(age)))}</span>`;
    }
  })} years old.
			I graduated from Bossier Parish Community College in December of <span class="svelte-kvci40" data-svelte-h="svelte-zjoe4f">2023</span> with a degree in
			Cybersecurity, maintaining a 3.8 GPA throughout my studies. My passion for technology started early,
			fueled by a fascination with computers and the concept of programming. This interest
			deepened in high school as I earned my
			${validate_component(Tooltip, "Tooltip").$$render($$result, { tip: "Proof of certification" }, {}, {
    default: () => {
      return `<a href="https://i.ibb.co/HHM70K5/Alex-Hanson-Comp-TIA-IT-Fundamentals-ITF-Certification-certificate.png" class="svelte-kvci40" data-svelte-h="svelte-1rfv9w4"><span class="svelte-kvci40">CompTIA ITF+</span></a>`;
    }
  })}
			certification, alongside Java Programming
			and IT Fundamentals classes at the
			${validate_component(Tooltip, "Tooltip").$$render($$result, { tip: "Click to visit their website" }, {}, {
    default: () => {
      return `<a href="https://caddocareer.com/" target="_blank" class="svelte-kvci40" data-svelte-h="svelte-18h8qzt"><span class="svelte-kvci40">Caddo Career &amp; Technology Center</span></a>`;
    }
  })}
			— experiences that solidified my choice of a career in computer science.</p></div> </section>`;
});
const css$1 = {
  code: '@charset "UTF-8";.title.svelte-jh6r80.svelte-jh6r80{display:flex;justify-content:center;margin-top:0}.title.svelte-jh6r80 h2.svelte-jh6r80{font-size:3.5rem;line-height:1.2;letter-spacing:-0.02em}.title.svelte-jh6r80 h2 span.svelte-jh6r80{color:var(--brighter);margin-right:0.2em}@media(max-width: 868px){.title.svelte-jh6r80.svelte-jh6r80{justify-content:left}.title.svelte-jh6r80 h2.svelte-jh6r80{font-size:clamp(2.5rem, 5vw, 3.5rem)}}.repo-card.svelte-jh6r80.svelte-jh6r80{padding:1rem 1.25rem;background-color:var(--neutral-two);border-radius:8px;min-height:140px;height:100%;display:flex;flex-direction:column;gap:0.25rem;transition:transform 0.3s var(--bezier-one), box-shadow 0.3s var(--bezier-one);justify-content:space-between;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);background-blend-mode:overlay;border:1px solid var(--neutral-four)}.repo-card.svelte-jh6r80.svelte-jh6r80:hover{transform:translateY(-2px);box-shadow:0 15 25 -10 rgba(0, 0, 0, 0.25)}.repo-card.svelte-jh6r80:hover #open.svelte-jh6r80{filter:brightness(1.3)}.shimmer.svelte-jh6r80.svelte-jh6r80{animation-duration:2.2s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:svelte-jh6r80-shimmer;animation-timing-function:linear;background:#ddd;background:linear-gradient(to right, var(--neutral-two) 8%, var(--neutral-one) 18%, var(--neutral-two) 33%);background-size:1200px 100%}@keyframes svelte-jh6r80-shimmer{0%{background-position:-1200px 0}100%{background-position:1200px 0}}a.svelte-jh6r80.svelte-jh6r80{text-decoration:none;color:var(--white);height:100%;border-radius:8px}img.svelte-jh6r80.svelte-jh6r80{height:16px;width:auto}h2.svelte-jh6r80.svelte-jh6r80{display:inline-block;margin-bottom:1rem}#star.svelte-jh6r80.svelte-jh6r80{transform:translateY(-1px)}#fork.svelte-jh6r80.svelte-jh6r80{height:17px}#pfp.svelte-jh6r80.svelte-jh6r80{border-radius:50%;height:16px}#top-part.svelte-jh6r80.svelte-jh6r80{display:flex;justify-content:space-between}#open.svelte-jh6r80.svelte-jh6r80{height:20px;transition:filter 0.3s var(--bezier-one)}span.svelte-jh6r80.svelte-jh6r80{color:var(--brighter)}.grid.svelte-jh6r80.svelte-jh6r80{gap:0.8rem;flex-direction:column;justify-content:center;align-items:center;display:grid;grid-template-columns:1fr 1fr;margin-bottom:3rem;position:relative}.grid.svelte-jh6r80.svelte-jh6r80:before{height:300px;font-size:175px;content:"⤬";font-weight:700;z-index:-1;user-select:none;transform:translate(760%, -35%);-webkit-text-stroke:2px var(--white);color:transparent;opacity:0.25;letter-spacing:-0.075em;position:absolute}@media(max-width: 600px){.grid.svelte-jh6r80.svelte-jh6r80{grid-template-columns:1fr}}@media(max-width: 868px){.grid.svelte-jh6r80.svelte-jh6r80{margin-bottom:2rem}}.dot.svelte-jh6r80.svelte-jh6r80{height:11px;width:11px;border-radius:50%;display:inline-block}.info.svelte-jh6r80.svelte-jh6r80{display:flex;gap:0.2rem;align-items:center}.info-container.svelte-jh6r80.svelte-jh6r80{display:flex;gap:0.9rem}',
  map: null
};
const Repos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="wrapper" id="work"><div class="title svelte-jh6r80" data-svelte-h="svelte-dn5b2d"><h2 class="svelte-jh6r80"><span class="svelte-jh6r80">code</span>:projects</h2></div> <div class="grid svelte-jh6r80">${`<div class="repo-card shimmer svelte-jh6r80"></div> <div class="repo-card shimmer svelte-jh6r80"></div> <div class="repo-card shimmer svelte-jh6r80"></div> <div class="repo-card shimmer svelte-jh6r80"></div>`}</div> </section>`;
});
const css = {
  code: "hr.svelte-ghty30.svelte-ghty30{background:transparent;height:1px;border:0;width:100%;margin-bottom:2rem}@media screen and (max-width: 768px){hr.svelte-ghty30.svelte-ghty30{margin-bottom:1.5rem}}footer.svelte-ghty30.svelte-ghty30{padding-bottom:2.4rem;display:flex;flex-direction:column;gap:2rem}.footer-main.svelte-ghty30.svelte-ghty30{display:flex;justify-content:space-between;align-items:center}@media screen and (max-width: 768px){.footer-main.svelte-ghty30.svelte-ghty30{flex-direction:column;gap:1.5rem}}h6.svelte-ghty30.svelte-ghty30{text-align:center;line-height:2.5rem;margin-top:0}span.svelte-ghty30.svelte-ghty30{font-family:var(--font-two), serif;background-color:var(--neutral-one);border-radius:7px;padding:0.15rem 0.5rem 0.15rem;width:fit-content;margin-left:1rem;margin-right:0.4rem}.copyright.svelte-ghty30.svelte-ghty30{text-align:center;opacity:0.7;transition:opacity 0.3s var(--bezier-one)}.copyright.svelte-ghty30.svelte-ghty30:hover{opacity:1}.copyright.svelte-ghty30 p.svelte-ghty30{font-size:0.9rem;color:var(--white-two);font-family:var(--font-two), serif;letter-spacing:-0.02em;margin:0}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  $$result.css.add(css);
  return `<hr class="svelte-ghty30"> <footer class="wrapper svelte-ghty30"><div class="footer-main svelte-ghty30">${validate_component(Socials, "Socials").$$render($$result, { size: "small" }, {}, {})} <h6 class="svelte-ghty30">Cwypt | ADH &lt;3
			${validate_component(Tooltip, "Tooltip").$$render($$result, { tip: "Why, hello there." }, {}, {
    default: () => {
      return `<span class="svelte-ghty30" data-svelte-h="svelte-1qkh7q3">V1</span>`;
    }
  })}</h6></div> <div class="copyright svelte-ghty30"><p class="svelte-ghty30">© ${escape(currentYear)} Alex Hanson. All rights reserved.</p></div> </footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NavHost, "NavHost").$$render($$result, {}, {}, {})} <main>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Repos, "Repos").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BJdB7X-p.js.map
