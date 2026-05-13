import React from 'react';
import { createAssistant, createSmartappDebugger } from '@salutejs/client';
import { ITEMS_DATABASE } from './data/items';

import './App.css';
import { MainScreen } from './pages/MainScreen';

if (typeof window !== 'undefined') {
  window.ITEMS_DATABASE = ITEMS_DATABASE;
}

const initializeAssistant = (getState) => {
  try {
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
  } catch (error) {
    console.warn('Assistant initialization failed:', error);
    return {
      on: () => {},
      sendData: () => {},
      close: () => {},
    };
  }
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('SalutBeauty App initialized');

    this.state = {
      selectedCategory: null,
      selectedTheme: null,
      assistantReady: false,
    };

    this.assistant = initializeAssistant(() => this.getStateForAssistant());

    if (this.assistant && typeof this.assistant.on === 'function') {
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
        this.setState({ assistantReady: true });
      });

      this.assistant.on('command', (event) => {
        console.log(`assistant.on(command)`, event);
      });

      this.assistant.on('error', (event) => {
        console.log(`assistant.on(error)`, event);
      });

      this.assistant.on('tts', (event) => {
        console.log(`assistant.on(tts)`, event);
      });
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getStateForAssistant() {
    const state = {
      beauty_selector: {
        category: this.state.selectedCategory || 'outfit',
        theme: this.state.selectedTheme || 'party',
      },
    };
    console.log('getStateForAssistant:', state);
    return state;
  }

  dispatchAssistantAction(action) {
    console.log('dispatchAssistantAction', action);
    if (action) {
      switch (action.type) {
        case 'select_look':
          return this.selectCapsule({ category: 'outfit' });
        case 'select_accessories':
          return this.selectCapsule({ category: 'accessories' });
        case 'select_care':
          return this.selectCapsule({ category: 'care' });
        default:
          console.log('Unknown action type:', action.type);
      }
    }
  }

  selectCapsule(action) {
    console.log('selectCategory', action);
    this.setState({ selectedCategory: action.category });
  }

  render() {
    return (
      <MainScreen
        state={this.state}
        assistant={this.assistant}
        onSelectCategory={(category) => this.selectCategory({ category })}
        onSelectTheme={(theme) => this.selectTheme({ theme })}
      />
    );
  }
}
