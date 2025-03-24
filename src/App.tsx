import {
    name,
    location,
    subline,
    socialLinks
} from './constants'
import './App.css'

function App() {

    return (
        <main className='main'>
            <div className='card'>
                <img
                    className='image'
                    src='/images/avatar-jessica.jpeg'
                    alt='Jessica Randall'
                />
                <header>
                    <h1 className='name__header'>{name}</h1>
                    <h2 className='location__header'>{location}</h2>
                </header>
                <p className='subline'>"{subline}"</p>
                <div className='social-links__container'>
                    {socialLinks.map(social => (
                        <a className='social-link__a' key={social.url} href={social.url}>{social.name}</a>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default App
