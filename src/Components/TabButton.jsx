export default function TabButton(props){
    return(
    <li>
        <button>{props.children}</button>
    </li>); 
}

// the code using the destructuring will look like -
/*
export default function TabButton({children}){
    return(
    <li>
        <button>{children}</button>
    </li>); 
}

the above written code also does the same work that is done by the first one.
*/