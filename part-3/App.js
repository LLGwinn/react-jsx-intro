const App = () => (
    <div>
        <Person name="Harry" age={13} hobbies={["magic", "staying alive"]} />
        <Person name="Percy" age={25} hobbies={["prefecting", "gloating"]} />
        <Person name="Crookshanks" age={3} hobbies={["sleeping"]} />
        <Person name="Dumbledore" age={842} hobbies={["magic","saving Harry","music"]} />
    </div>
)

ReactDOM.render( <App />, document.getElementById("root"));