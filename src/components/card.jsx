const AppCard = (props) => {

  let date = props.date
  let new_date = new Date(date).toLocaleDateString();
  let new_time = new Date(date).toLocaleTimeString();

  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg border flex flex-col">
      <img className="w-full" src={props.img} alt="" />
      <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-left">{props.title ? props.title : props.name}</div>
          <p className="text-gray-600 text-left">{props.author} - {new_date} {new_time}</p>
          <p className="text-gray-900 text-base text-left mb-4">
          {props.desc}
          </p>
          <div className="pt-4 pb-2 bottom-1 relative mt-auto text-left">
              <a href={props.url} target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded inline-block">Read more...</a>
          </div>
      </div>
    </div>
  )
}

export default AppCard;