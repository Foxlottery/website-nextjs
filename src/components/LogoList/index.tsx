import { IconLink } from 'app/types/IconLink'

interface Props {
  title: string
  iconLinks: IconLink[]
}

const LogoList = ({ title, iconLinks }: Props) => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="font-extrabold text-center text-1xl sm:text-2xl">
          <span className="block">{title}</span>
        </h2>
        <div className="grid grid-cols-8 gap-8 mt-10">
          {iconLinks.map((iconLink: IconLink, index: number) =>
            iconLink.link ? (
              <div key={index} className="flex justify-center col-span-2 mx-1 md:mx-6">
                <a href={iconLink.link} target="_blank" rel="noopener noreferrer">
                  <img className="h-9" src={iconLink.path} />
                </a>
              </div>
            ) : (
              <div key={index} className="flex justify-center col-span-2 mx-1 md:mx-6">
                <img className="h-9" src={iconLink.path} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default LogoList
