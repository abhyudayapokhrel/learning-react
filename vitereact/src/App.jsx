function App() {
  const username = "Abhyudaya Pokhrel"

  return(
    <>
    <h1>Hello, World!</h1>
    <p>This is my project | {username}</p> 
    {/* username is evaluated expression of javascript so we cannnot perform any evaluation in return do it before and pass it*/}
    <p>Something in the way</p>
    <p>Tears in Heaven</p>
    <button>Click Me!</button>
    </>
  )
}

export default App
