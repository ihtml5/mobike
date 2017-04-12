export default {
  hasIconClicker: function (icons, type, key, isEvent = true) {
    let _type = type
    let _key = key
    if (isEvent) {
      return icons[_type] && icons[_type]['on'] && icons[type]['on'][_key]
    }
    return icons[_type] && icons[_type][_key]
  }
}
