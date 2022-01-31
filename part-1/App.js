const App = () => (
        <div>
            <FirstComponent />
            <NamedComponent name="Harry Potter"></NamedComponent> 
        </div>
);

ReactDOM.render( <App />, document.getElementById("root"));