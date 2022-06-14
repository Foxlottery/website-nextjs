import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import ContainerWithLeftImage from 'app/components/ContainerWithLeftImage'
import LogoList from 'app/components/LogoList'
import { iconLinks, title } from 'app/config/blockchainNetwork'
import ecosystemContainerConfig from 'app/config/ecosystemContainer'
import featureConfig from 'app/config/feature'
import Feature from 'components/Feature'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { i18n } = useLingui()
  const feature = featureConfig(i18n)
  const ecosystemContainer = ecosystemContainerConfig(i18n)

  return (
    <>
      <div className="relative overflow-hidde">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-3xl">
                <span className="block xl:inline">{i18n._(t`Decentralized Lottery create a better society`)}</span>
              </h2>
              <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {i18n._(t`Decentralized web3 lottery building service using blockchain-based crypto currency and smart contracts
                for municipalities.`)}
              </p>
              <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="https://whitepaper.foxlottery.org/"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-600 md:py-4 md:text-lg md:px-10"
                  >
                    {i18n._(t`Whitepaper`)}
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="https://app.foxlottery.org/"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-green-600 border border-transparent rounded-md bg-gray-50 hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                  >
                    {i18n._(t`Demo`)}
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Feature feature={feature} />
      <ContainerWithLeftImage container={ecosystemContainer} />
      <LogoList title={title} iconLinks={iconLinks} />
      <div>
        <div className="w-full px-4 py-16 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="block">{i18n._(t`Join Community`)}</span>
          </h2>
          <p className="px-1 mt-4 text-lg leading-6 text-gray-600 md:px-16">
            {i18n._(t`We aim to be a DAO. Anyone can see the progress of the project and contribute to the project in the discord
            community. Join us in building a better world.`)}
          </p>
          <div className="max-w-md mx-auto mt-6 sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="https://discord.gg/2RuM6csG"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                {i18n._(t`Join Discord`)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
