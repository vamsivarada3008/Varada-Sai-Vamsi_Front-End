About List component :

React.memo() is used to memoize functional component. when applied it prevents useless re-rendering (if previos props == current props). Here WrappedListComponent is wrapped with memo and passed to List. And this List is exported as a default export.

What problems/warnings in the code?:


//the Use of calling ()=>onClickHandler(index) instead of onClickHandler(index) is to prevent the onClickHandler from being called on every render

onClick={()=>onClickHandler(index)}




// in this selectedIndex and setSelectedIndex or in reverse order

//Instead use const [selectedIndex,setSelectedIndex] = useState();

//And also we use useState(null); we use null as the initial value of the state

const [setSelectedIndex, selectedIndex] = useState(); 





// We pass the index of the selected item to the isSelected prop

//=== is the strict equality operator

//index === selectedIndex will return true if the index of the selected item is equal to the index //of the current item

//index !== selectedIndex will return true if the index of the selected item is not equal to the //index of the current item

isSelected={index===selected} 






// propTypes.arrayOf is used for an array of objects
 
PropTypes.arrayOf 

// It is used for an array of object with a specific shape

PropTypes.shape 

