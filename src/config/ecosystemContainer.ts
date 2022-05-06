import { I18n } from '@lingui/core'
import { t } from '@lingui/macro'
import { Container } from 'app/types/Container'

const ecosystemContainer = (i18n: I18n): Container => {
  return {
    title: i18n._(t`Ecosystem`),
    description:
      i18n._(t`Play a lottery using crypto currency compliant with the ERC20 standard on the Blockchain Network.
    Municipalities use lotteries to raise tax revenue and raise money for charity.
    Municipalities will use a portion of the proceeds to support charitable activities.
    Foxlottery collects system usage fees from municipalities to make the Lottery system easier to use.`),
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`,
    rightImagePath: '/images/ecosystem.png',
  }
}

export default ecosystemContainer
