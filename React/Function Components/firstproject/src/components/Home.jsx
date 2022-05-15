import { render } from "react-dom";

export default function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <p>{props.obj.name}  {props.obj.email}</p>
        </div>
    )

}