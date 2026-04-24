import React from 'react';
import { createAssistant, createSmartappDebugger } from '@salutejs/client';

import './App.css';
import { MainScreen } from './pages/MainScreen.jsx';

const initializeAssistant = (getState) => {
  if (process.env.NODE_ENV === 'development') {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? '',
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
      nativePanel: {
        defaultText: 'Говорите!',
        screenshotMode: false,
        tabIndex: -1,
      },
    });
  } else {
    return createAssistant({ getState });
  }
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('SalutBeauty App initialized');

    this.state = {
      selectedCategory: null,
      selectedTheme: 'party',
      isListening: false,
    };

    this.assistant = initializeAssistant(() => this.getStateForAssistant());

    this.assistant.on('data', (event) => {
      console.log(`assistant.on(data)`, event);
      if (event.type === 'character') {
        console.log(`Character: "${event?.character?.id}"`);
      } else if (event.type === 'insets') {
        console.log(`Insets received`);
      } else {
        const { action } = event;
        this.dispatchAssistantAction(action);
      }
    });

    this.assistant.on('start', (event) => {
      console.log(`assistant.on(start)`, event);
      this.setState({ isListening: true });
    });

    this.assistant.on('command', (event) => {
      console.log(`assistant.on(command)`, event);
    });

    this.assistant.on('error', (event) => {
      console.log(`assistant.on(error)`, event);
      this.setState({ isListening: false });
    });

    this.assistant.on('tts', (event) => {
      console.log(`assistant.on(tts)`, event);
    });
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getStateForAssistant() {
    const state = {
      beauty_selector: {
        theme: this.state.selectedTheme,
        category: this.state.selectedCategory,
      },
    };
    console.log('getStateForAssistant:', state);
    return state;
  }

  dispatchAssistantAction(action) {
    console.log('dispatchAssistantAction', action);
    if (action) {
      switch (action.type) {
        case 'select_category':
          return this.selectCategory(action);
        case 'set_theme':
          return this.setTheme(action);
        case 'show_items':
          return this.showItems(action);
        default:
          console.log('Unknown action type:', action.type);
      }
    }
  }

  selectCategory(action) {
    console.log('selectCategory', action);
    this.setState({ selectedCategory: action.category });
  }

  setTheme(action) {
    console.log('setTheme', action);
    this.setState({ selectedTheme: action.theme });
  }

  showItems(action) {
    console.log('showItems', action);
    this.setState({ 
      selectedCategory: action.category,
      selectedTheme: action.theme || this.state.selectedTheme,
    });
  }

  render() {
    return (
      <MainScreen
        state={this.state}
        assistant={this.assistant}
        onSelectCategory={(category) => this.selectCategory({ category })}
        onSetTheme={(theme) => this.setTheme({ theme })}
      />
    );
  }
}