import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({text}) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const ButtonComponent = ({text,click}) => {
  return <button className={styles.button} onClick={click}>{text}</button>
}

class Observable {

  mapping = {};

  register({eventName, callback}) {
    if (!this.mapping[eventName]) {
      this.mapping[eventName] = [];
    }
    this.mapping[eventName].push(callback);
  }

  unregister({eventName, callback}) {
    if (this.mapping[eventName]) {
      const callbackIndex = this.mapping[eventName].findIndex(func => func === callback);
      if (callbackIndex) {
        this.mapping[eventName] = [
          ...this.mapping[eventName].splice(0, callbackIndex),
          ...this.mapping[eventName].splice(callbackIndex + 1)
        ];
      }
    }
  }

  notify({eventName, value}) {
    if (this.mapping[eventName]) {
      this.mapping[eventName].forEach(callback => callback(value));
    }
  }

}

export const observable = new Observable()
