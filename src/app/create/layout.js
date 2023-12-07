export default function layout(props) { // props 필수
    return (
        <form>
            <h2>Create</h2>
            {props.children}
        </form>
    )

}