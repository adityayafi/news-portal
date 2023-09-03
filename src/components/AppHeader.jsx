const AppHeader = ({handleCategory}) => {

  const catList = [
    {
      label: 'General'
    },
    {
      label: 'Technology'
    },
    {
      label: 'Business'
    },
    {
      label: 'Health'
    },
    {
      label: 'Science'
    },
    {
      label: 'Entertainment'
    },
    {
      label: 'Sports'
    }
  ]

return (
  <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="w-2/4">
          <div className="text-white text-xl">
            News Portal
          </div>
        </div>
        <div className="w-2/4">
          {
            catList.map((item, i) => {
              return <span 
                className="text-white text-md mx-2 float-right opacity-80 hover:opacity-100 cursor-pointer"
                onClick={() => handleCategory(item.label)}
                key={i}
              >
                {item.label}
              </span>
            })
          }
        </div>
      </div>                
    </div>
  </nav>        
)
}

export default AppHeader;