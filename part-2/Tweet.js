const Tweet = ({username, name, message, date=new Date().toDateString()}) => (
    <div>
        <p>Username: {username}</p>
        <p>Name: {name}</p>
        <p>Date: {date}</p>
        <p>Message: {message}</p>
    </div>
);