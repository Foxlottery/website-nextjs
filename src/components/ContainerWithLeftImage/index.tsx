import { Container } from 'app/types/Container'

interface Props {
  container: Container
}

export default function ContainerWithLeftImage({ container }: Props) {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden bg-white">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              {container.icon ? (
                <div>
                  <span className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-md">
                    <div
                      className="w-6 h-6 text-white"
                      dangerouslySetInnerHTML={{
                        __html: container.icon,
                      }}
                    />
                  </span>
                </div>
              ) : null}
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">{container.title}</h2>
                <p className="mt-4 text-lg text-gray-500">{container.description}</p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16">
            <div className="pl-4 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img className="w-50" src={container.rightImagePath} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
