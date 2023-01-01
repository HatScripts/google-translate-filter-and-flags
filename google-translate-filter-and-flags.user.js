// ==UserScript==
// @name        Google Translate: Filter & Flags
// @namespace   https://github.com/HatScripts/google-translate-filter-and-flags
// @version     1.0.0
// @license     MIT
// @description Filters languages and shows country flags on Google Translate
// @author      HatScripts
// @icon        https://ssl.gstatic.com/translate/favicon.ico
// @match       http://translate.google.com/*
// @match       https://translate.google.com/*
// @grant       none
// @rut-at      document-start
// @require     https://raw.githubusercontent.com/HatScripts/UserscriptHelpers/master/applyCss.min.js
// ==/UserScript==

;(() => {
  'use strict'

  console.log(GM_info.script.name)

  const OPTIONS = {
    filterLangs: true,
    showFlags: true,
    languagesShown: 'ar,de,el,en,eo,es,fi,fr,it,ja,ko,la,no,pt,ru,sv,zh-CN',
  }

  const LANG_MAP = {
    'iw': 'he', // Hebrew
    'jw': 'jv', // Javanese
    'mni-Mtei': 'mni', // Meiteilon (Manipuri)
    'zh-CN': 'zh', // Chinese (Simplified)
    'zh-TW': 'zh', // Chinese (Traditional)
  }

  const prefix = '.qSb8Pe'
  if (!document.querySelector(prefix)) {
    console.error('Couldn\'t find language buttons')
  }

  let css = '/* ' + GM_info.script.name + ' */'

  if (OPTIONS.filterLangs) {
    css += prefix + '{ display: none; }'
    css += OPTIONS.languagesShown.split(',').map(lang => `${prefix}[data-language-code=${lang}]`).join(',')
    css += '{ display: inline-flex; }'
    css += '.C96yib > .vSUSRc > ' + prefix + ' { display: inline-flex; }'
  }

  if (OPTIONS.showFlags) {
    //css += `${prefix}.RCaXn:not(.KKjvXb) .W5jNxd, ${prefix} .g3XDjb { display: none !important; }`
    css += `${prefix} > .l7O9Dc { background-repeat: no-repeat; background-size: contain; background-position-x: 6px; }`
    css += `${prefix} > .l7O9Dc > i { display: none !important; }`
    document.querySelectorAll(prefix).forEach(wrapper => {
      let code1 = wrapper.dataset.languageCode
      let code2 = LANG_MAP[code1] || code1
      css += `${prefix}[data-language-code=${code1}] > .l7O9Dc {`
      css += `background-image: url(https://hatscripts.github.io/circle-flags/flags/language/${code2}.svg) !important;`
      css += '}'
    })
  }

  applyCss(css)
})()