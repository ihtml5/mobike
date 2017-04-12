export function hasIconProperty (icons, type, key, isEvent = true) {
  let _type = type
  let _key = key
  if (isEvent) {
    return icons[_type] && icons[_type]['on'] && icons[type]['on'][_key]
  }
  return icons[_type] && icons[_type][_key]
}
export function abstractWinInfo (context, prop, fallbackprop) {
  let _context = context || window
  let _prop = prop
  let _fprop = fallbackprop
  if (_context[_prop]) {
    return _context[_prop]
  } else if ((document.body) && (document.body[_fprop])) {
    return document.body[_fprop]
  } else if (document.documentElement && document.documentElement[_fprop]) {
    return document.documentElement[_fprop]
  }
}
export function winInfo () {
  return {
    width: abstractWinInfo(window, 'innerWidth', 'clientWidth'),
    height: abstractWinInfo(window, 'innerHeight', 'clientHeight')
  }
}
