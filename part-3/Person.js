const Person = ( {name, age, hobbies} ) => (
    // PLAIN SOLUTION WITH NO BOOTSTRAP COMPONENTS

    // <div>
    //     <p>Learn some information about this person:</p>
    //     <p>Name: {(name.length > 8) ? name.slice(0, 6) : name}</p>
    //     <p>Age: {age} </p>
    //     <h3>{(age >= 18) ? "Please go vote!" : "You must be 18."}</h3>
    //     <p>Hobbies:</p>
    //     <ul>
    //         {hobbies.map(h => <li>{h}</li>)}
    //     </ul>
    //     <hr></hr>
    // </div>

    // FURTHER STUDY WITH BOOTSTRAP COMPONENTS
    <div>
        <div class="card w-50">
            <h5 class="card-header">{(name.length > 8) ? name.slice(0, 6) : name}</h5>
            <div class="card-body">
                <h6 class="card-title text-muted">Learn some information about this person:</h6>
                <p class="card-text">
                    Age: {age}
                    <div class="alert alert-danger w-25 p-2" role="alert">
                        {(age >= 18) ? "Please go vote!" : "You must be 18."}
                    </div>
                    Hobbies:
                    <ul>
                        {hobbies.map(h => <li>{h}</li>)}
                    </ul>
                </p>      
            </div>
        </div>
    </div>
)