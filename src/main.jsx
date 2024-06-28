import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import App from "./components/App/App"
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

          <App />

      </PersistGate>
    </Provider>
  </React.StrictMode>,
)


//5-HW
// Компонент <BrowserRouter>
// Командний центр управління маршрутизацією, який 
//приховує в собі всю логіку взаємодії із історією 
//браузера.Створює маршуртизатор та об'єкт історії 
//навігації, щоб синхронізувати інтерфейс із URL-адресою.
//Використовуючи React контекст передає інформацію 
//про поточний стан історії навігації всім нащадкам.