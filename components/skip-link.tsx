const SkipLink = () => {
  return (
  <ul className="focus-within:border-slate-950">
    <li><a href="#theme-btn" className="sr-only focus:not-sr-only focus:bg-black">Skip to theme button</a></li>
    <li><a href="#reportBug-btn" className="sr-only focus:not-sr-only">Skip to report bug button</a></li>
    <li> <a href="#i18n-btn" className="sr-only focus:not-sr-only">Skip to switch language button</a></li>
  </ul>
  )
}

export default SkipLink