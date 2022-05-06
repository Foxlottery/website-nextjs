import { I18n } from '@lingui/core'
import { t } from '@lingui/macro'
import { Feature } from 'app/types/Feature'

const feature = (i18n: I18n): Feature => {
  return {
    title: i18n._(t`The value we offer`),
    subTitle: i18n._(t`feature`),
    description: '',
    featureItems: [
      {
        name: i18n._(t`No-Code`),
        description: i18n._(
          t`You can create a lottery with No-Code. You can start a lottery without development by setting the lottery return rate, the ERC20 token to be used as the standard, the lottery cycle, base color, logo, domain, etc.`
        ),
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>`,
      },
      {
        name: i18n._(t`Open Source`),
        description: i18n._(
          t`By making it open source, engineers from all over the world can participate in its development, and any problems will be quickly corrected.`
        ),
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>`,
      },
      {
        name: i18n._(t`Trustless`),
        description: i18n._(
          t`Trusting the source code does not require the municipality to trust Foxlottery. Nor do lottery participants need to trust the municipality. The source code on the blockchain guarantees trust.`
        ),
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>`,
      },
    ],
  }
}

export default feature
