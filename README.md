# Google Translate: Filter & Flags

This userscript filters languages and shows country flags on [Google Translate](https://translate.google.com/).

## Download

1. This is a userscript. To use it you'll first need one of the following browser extensions:

   |                    | Tampermonkey                     | Greasemonkey | Violentmonkey
   | ------------------ | -------------------------------- | ------------ | -------------
   | ![Chrome][c-logo]  | [Link][c-tm] ([Beta][c-tm-beta]) | -            | [Link][c-vm]
   | ![Firefox][f-logo] | [Link][f-tm]                     | [Link][f-gm] | -
   | ![Edge][e-logo]    | [Link][e-tm]                     | -            | -
   | ![Safari][s-logo]  | [Link][s-tm]                     | -            | -
   | ![Opera][o-logo]   | [Link][o-tm]                     | -            | [Link][o-vm]

[c-logo]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_24x24.png   "Chrome"
[f-logo]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_24x24.png "Firefox"
[e-logo]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_24x24.png       "Edge"
[s-logo]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_24x24.png   "Safari"
[o-logo]: https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_24x24.png     "Opera"
[c-tm]: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
[c-tm-beta]: https://chrome.google.com/webstore/detail/tampermonkey-beta/gcalenpjmijncebpfijmoaglllgpjagf
[c-vm]: https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag
[f-tm]: https://addons.mozilla.org/firefox/addon/tampermonkey/
[f-gm]: https://addons.mozilla.org/firefox/addon/greasemonkey/
[e-tm]: https://www.microsoft.com/store/apps/9NBLGGH5162S
[s-tm]: https://safari.tampermonkey.net/tampermonkey.safariextz
[o-tm]: https://addons.opera.com/extensions/details/tampermonkey-beta/
[o-vm]: https://addons.opera.com/extensions/details/violent-monkey/

2. Then install this script from one of the following links:
   * [GitHub](https://github.com/HatScripts/google-translate-filter-and-flags/raw/main/google-translate-filter-and-flags.user.js) (Recommended)
   * [Greasy Fork](https://greasyfork.org/en/scripts/457482-google-translate-filter-flags)

## Settings

You can configure the settings by clicking the 'Settings' button under 'Google Translate: Filter & Flags' in your userscript manager.

Setting          | Description                                                             | Default
---------------- | ----------------------------------------------------------------------- | -------
Show flags       | Show country flags next to languages                                    | on
Filter languages | Show only the specified languages                                       | on
Languages shown  | The languages to show, as ISO 639-1 language codes, separated by commas | `ar,de,el,en,eo,es,fi,fr,it,ja,ko,la,no,pt,ru,sv,zh-CN`

## Acknowledgements

* The flags used are from [circle-flags](https://github.com/HatScripts/circle-flags)
* The settings interface uses [GM_config](https://github.com/sizzlemctwizzle/GM_config) by sizzlemctwizzle
