function ExpenseDetails(props){
    const title=props.title;
    const ammount= props.ammount;
    const location=props.location;

    return (
        <div>
            <div>{title}</div>
            <div>{ammount}</div>
            <div>{location}</div>
        </div>
    )
}
export default ExpenseDetails;