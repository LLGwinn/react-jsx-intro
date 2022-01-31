const App = () => (
    <div>
        <Tweet username="harry" name="Harry Potter" message="Tweet from Harry!" />
        <hr></hr>
        <Tweet username="hermione" name="Hermione Granger" message="Tweet from Hermione!" />
        <hr></hr>
        <Tweet username="albus" 
               name="Albus Dumbledore" 
               date={new Date(1201,11,24).toDateString()} 
               message="Old tweet from Dumbledore!" />
    </div>
)

ReactDOM.render( <App />, document.getElementById("root"));