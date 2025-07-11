import NavLink from './NavLink'

type Route = {
  name: string
  path: string
}

export default function MobileMenu({ routes }: { routes: Route[] }) {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <label 
        htmlFor="menu-toggle" 
        className="md:hidden cursor-pointer block w-6 space-y-1"
      >
        <span className="block h-0.5 w-6 bg-gray-600 transition-transform peer-checked:rotate-45 peer-checked:translate-y-1.5"></span>
        <span className="block h-0.5 w-6 bg-gray-600 transition-opacity peer-checked:opacity-0"></span>
        <span className="block h-0.5 w-6 bg-gray-600 transition-transform peer-checked:-rotate-45 peer-checked:-translate-y-1.5"></span>
      </label>

      <div className="hidden peer-checked:block absolute left-0 right-0 top-16 bg-white shadow-lg z-50">
        <div className="flex flex-col items-center py-4 space-y-4">
          {routes.map(({name, path}) => (
            <NavLink key={path} name={name} path={path} />
          ))}
        </div>
      </div>
    </div>
  )
}