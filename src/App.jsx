import './App.css'
import React from 'react'

function App() {
  const [language, setLanguage] = React.useState('en')

  const handleClick = () => {
    setLanguage((prev) => prev === 'en' ? 'tr' : 'en')
  }
  return (
    <>
      <div className='App'>
         <img className="logo" src="/logo2.jpg" alt="logo" />
        {language === 'en' ?
          <div>
            The site is under development
          </div>
          :
          <div>
            Site geliştirme aşamasındadır
          </div>}
        <button onClick={() => handleClick()}>
          {language === 'en' ? 'Change to Turkish' : 'Türkçeye geç'}
        </button>
      </div>

    </>
  )
}

export default App
