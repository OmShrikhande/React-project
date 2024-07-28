// export default function TabButton(props){
//     function handelClick(){

//         console.log("Hello world")

//     }

//     return(
//     <li>
//         <button onClick={handelClick}>{props.children}</button>
//     </li>); 
// }



// the code using the destructuring will look like -

export default function TabButton({children,onSelect,isSelected}){

    return(
    <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>); 
}

// the above written code also does the same work that is done by the first one.
