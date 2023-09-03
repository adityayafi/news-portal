import { useEffect, useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import SearchInput from './components/searchInput'
import ApiService from './services/ApiService'
import config from './config'
import AppCard from './components/card'
import { slice, toLower } from 'lodash'



function App() {

  const [news, setNews] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [index, setIndex] = useState(9);
  const initialNews = slice(news, 0, index);
  // const [category, setCategory] = useState('general')

  const fetchCategoryNews = async (cat) => {
    const resp = await ApiService.ReqGet(`${config.baseUrl}/top-headlines/sources?category=${toLower(cat)}&apiKey=${config.apiKey}`)
    setNews(resp?.data?.sources)
    // console.log(resp)
  }

  const fetchInitialSearch = async (q) => {
    const resp = await ApiService.ReqGet(`${config.baseUrl}/everything?q=${q}&apiKey=${config.apiKey}`)
    setNews(resp?.data?.articles)
  }

  const fetchInitialNews = async () => {
    const resp = await ApiService.ReqGet(`${config.baseUrl}/top-headlines?country=us&apiKey=${config.apiKey}`)
    setNews(resp?.data?.articles)
  }


  const loadmore = () => {
    setIndex(index + 9);
    if(index >= news.length) {
      setIsComplete(true);
    }else{
      setIsComplete(false);
    }
  }

  useEffect(() => {
    fetchInitialNews();
  },[])

  return (
    <div>
      <AppHeader handleCategory={fetchCategoryNews}/>
      <SearchInput handleSearch={fetchInitialSearch}/>
      <div className="mx-auto max-w-7xl lg:px-8 mt-6 mb-8 justify-center flex">
          <div className="grid grid-rows-1 grid-cols-3 gap-8">
            {
                initialNews.map((news, i) => {
                    return <AppCard 
                    key={i} 
                    img={news.urlToImage}
                    url={news.url}
                    title={news.title}
                    date={news.publishedAt}
                    author={news.author}
                    desc={news.description}/>                      
                })
            } 
          </div>
      </div>
      <div className='justify-center flex mb-20'>
        {
          isComplete ? (
            <button 
              className='border border-slate-400 p-2 rounded text-white bg-red-500 hover:bg-red-400 disabled:bg-slate-500'
              disabled
            >That's It</button>
          ):(
            <button
              className='border border-slate-400 p-2 rounded text-white bg-red-500 hover:bg-red-400'
              onClick={loadmore}
            >
              Load more...
            </button>
          )
        }
      </div>
    </div>
  )
}

export default App
