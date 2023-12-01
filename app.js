import React from 'react';
import ReactDOM from 'react-dom';
//create nested header element using React.craeateElement(h1,h2,h3 iside a div with class="title")
const header = React.createElement(
    "div",
    {
      className: "Title",
      key: "title",
    },
    [
      React.createElement(
        "h1",
        {
          key: "h1",
        },
        "This is h1 Tag"
      ),
      React.createElement(
          "h2",
          {
            key: "h2",
          },
          "This is h2 Tag"
        ),
        React.createElement(
          "h3",
          {
            key: "h3",
          },
          "This is h3 Tag"
        )
    ]
  );
  //create the same element using jsx
  const g = (
    <div className="Title" key="title">
      <h1 key="h1">This is h1 tag</h1>
      <h2 key="h2">This is h2 tag</h2>
      <h3 key="h3">This is h3 tag</h3>
    </div>
  );
  //create a funtional component of the same with jsx
  const o = () => {
    return (
      <div className="Title" key="title">
        <h1 key="h1">This is h1 tag</h1>
        <h2 key="h2">This is h2 tag</h2>
        <h3 key="h3">This is h3 tag</h3>
      </div>
    );
  };
  //pass attributes into the tag in jsx
  const u = () => {
    return (
      <div className="Title" key="title">
        <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
        <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
        <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
      </div>
    );
  };
  //composition of component(add a component iside another)

  const AnotherComponent = function(){
    return <h2> This is Another Component</h2>
}

const t = () => {
  return (
    <div className="Title" key="title">
      <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
      <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
      <AnotherComponent/>
      <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
    </div>
  );
};
//{TitleComponent} VS {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in jsx

const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

const TitleElement = () => {
  return <h2 style={{ color: "red" }}>This Title Element</h2>;
}; // This is Title Component

const h = () => {
  return (
    <div className="Title" key="title">
      {/* This is {TitleComponent} */}
      {element}
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 tag
      </h1>
      {/* This is {<TitleComponent/>} */}
      <TitleElement/>
      <h2 style={{ color: "palevioletred" }} key="h2">
        This is h2 tag
      </h2>
      {/* This is {<TitleComponent></TitleComponent>}*/}
      <TitleElement></TitleElement>
      <h3 style={{ color: "green" }} key="h3">
        This is h3 tag
      </h3>
    </div>
  );
};
/*create a header component from scratch using funtional components with jsx
.add a logo on left
.add a search bar in middle
.add user icon on right
.add css to make it look nice*/

const a = () => {
    return(
        <>
        <header className="header">
            <div className="left">
                <img src={logo} alt="Logo" />
            </div>
            <div className="center">
                <input className="input" type="text" placeholder="Search anything you want..."/>
                <button type="submit">Submit</button>
            </div>
            <div className="right">
                <img src={userIcon} alt="User Icon"/>
            </div>
        </header>
        </>
    )
}