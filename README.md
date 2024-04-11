# initial- not a great way to write a code

const RestCard = (props) => {
const { restinfo } = props;
return (

   <div>
      <p>{restinfo.info.costForTwo}</p>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
        <RestCard restinfo={restobj[0]} />
        <RestCard restinfo={restobj[1]} />
      </div>
    </div>
  );
};

# two types of exports and imports-

default and named exports.
default: to export and import one file, named: to export and import multiple files

# Hooks:

Hook is also a normal JS utility function - prebuild function with super powers given by react. Called react Hooks

local State variable - powerful variable using Hooks

- maintains the state of my component, inside that particular component. scope is limited to that component
- useState() - create super powerful state variables in react
  when we call the useState() function, we receive a state variable inside an array.

  const[variable1] = useState([default values]);
  // this 'variable1' becomes the powerful variable

  let variable1 = [default values]; //for comparison

definition: whenever a state variable updates, react re-renders my component. - update the UI as per the new data passed on (here- filter)

- useEffect()

Outlet:
Main page is rendered using appRouter -> calling MainApp -> which has <Header> component inside it and when it goes to <Outlet/> component, it will call the children elements according to the path that we have set -> <body>, <About>, <contact>
