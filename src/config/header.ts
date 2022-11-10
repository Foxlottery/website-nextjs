import { I18n } from '@lingui/core'
import { t } from '@lingui/macro'

const header = (i18n: I18n) => {
  return {
    menuItems: [
      { key: 'Home', title: i18n._(t`Home`), link: `/` },
      // { key: 'Demo', title: i18n._(t`Demo`), link: `http://app.foxlottery.org/` },
      { key: 'Whitepaper', title: i18n._(t`Whitepaper`), link: `https://whitepaper.foxlottery.org/` },
      { key: 'demo v1', title: i18n._(t`Demo`) + ' v1', link: `https://app.foxlottery.org/` },
      { key: 'demo v2', title: i18n._(t`Demo`) + ' v2', link: `https://demo.foxlottery.org/` },
    ],
  }
}

export default header
