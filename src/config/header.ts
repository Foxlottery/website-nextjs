import { I18n } from '@lingui/core'
import { t } from '@lingui/macro'

const header = (i18n: I18n) => {
  return {
    menuItems: [
      { key: 'Home', title: i18n._(t`Home`), link: `/` },
      // { key: 'Demo', title: i18n._(t`Demo`), link: `http://app.foxlottery.org/` },
      { key: 'Whitepaper', title: i18n._(t`Whitepaper`), link: `https://whitepaper.foxlottery.org/` },
      { key: 'demo', title: i18n._(t`Demo`), link: `https://app.foxlottery.org/` },
    ],
  }
}

export default header
