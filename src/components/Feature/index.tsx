import { Feature as FeatureType } from 'app/types/Feature'

interface FeatureProps {
  feature: FeatureType
}

export default function Feature({ feature }: FeatureProps) {
  return (
    <div className="relative py-16 bg-white sm:py-24 lg:py-32">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold tracking-wider text-green-600 uppercase">{feature.subTitle}</h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{feature.title}</p>
        <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">{feature.description}</p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {feature.featureItems.map((featureItem) => (
              <div key={featureItem.name} className="pt-6">
                <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <div className="w-6 h-6 text-white" dangerouslySetInnerHTML={{ __html: featureItem.icon }} />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{featureItem.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{featureItem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
