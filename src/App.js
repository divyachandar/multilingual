import {Component} from 'react'
import Tabs from './components/Tabs'
import LanguageItem from './components/LanguageItem'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredLanguage = () => {
    const {activeTabId} = this.state
    const filteredLanguage = languageGreetingsList.filter(
      eachLanguage => eachLanguage.id === activeTabId,
    )
    return filteredLanguage
  }

  render() {
    const {activeTabId} = this.state
    const filteredLanguage = this.getFilteredLanguage()
    return (
      <div className="main-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tabs-container">
          {languageGreetingsList.map(tabDetails => (
            <Tabs
              key={tabDetails.id}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === tabDetails.id}
            />
          ))}
        </ul>

        {filteredLanguage.map(eachLanguage => (
          <LanguageItem key={eachLanguage.id} languageDetails={eachLanguage} />
        ))}
      </div>
    )
  }
}

export default App
