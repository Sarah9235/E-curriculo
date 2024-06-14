import { Header } from './Componentes/Header'
import { Post } from './Componentes/Post'
import { Sidebar } from './Componentes/Sidebar'

import styles from './app.module.css'
import './styles.global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />

        </main>
      
      </div>
    </div>


  )
}
