import React from 'react'
import s from '../App.module.scss'
import preloadGif from '../assets/preloader.gif'

let Loader = () => <img className={s.preloader} src={preloadGif} alt="Preloader"/>

export default Loader 