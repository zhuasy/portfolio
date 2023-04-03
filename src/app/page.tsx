import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* navbar goes here */}
      {/* introduction */}
      <div>
        <div>
          <h1>alex zhu.</h1>
          <h1>student.</h1>
          <h1>dev.</h1>
        </div>

        <div>
          <h2>heyo! i'm alex 👋</h2>
          <p>a senior at the <a href="https://umich.edu" target="_blank">university of michigan</a> studying computer science.</p>
          <p>i'm experienced with backend development</p>
          <p>recently, i've been working with python and c++.</p>
          {/* add link to contact section */}
          <p>get in touch!</p>
        </div>
      </div>

      {/* education and experience */}
      <div>
        <div>
          <h3>education</h3>
          <div>university of michigan-ann arbor</div>
        </div>

        <div>
          <h3>experience</h3>
          <div>amazon</div>
          <div>sigma computing</div>
          <div>aicc</div>
        </div>
      </div>

      {/* projects */}
      <div>
        <div>
          Open Source Contributions
          <div>
            youtube-dl
          </div>
        </div>
        <div>
          Personal Projects
          <div>
            Eragon Coaching
          </div>
        </div>
      </div>

      {/* contact */}
      <div>
        <div>
          github
        </div>
        <div>
          linkedin
        </div>
      </div>
      
    </>
  )
}