import React from "react";
import ReactDOM from 'react-dom/client'
{/* <div id = 'parent'>
    <div id = 'child'>
        <h1>I am H1 tag</h1>
        <h2>I am H2 tag</h2>
    </div>
    <div id = 'child2'>
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */}


    // const heading = React.createElement(
    // 'h1', 
    // { 
    //     id: 'heading'
    // } , 
    // "Hello Harshada From React")

    // const root = ReactDOM.createRoot(document.getElementById('root'))

    // root.render(heading)

    // const heading = React.createElement('div', {id: 'parent'}, [
    //     React.createElement('div', {id: 'child1'}, [
    //         React.createElement('h1', {}, "I am H1 tag"),
    //         React.createElement('h2', {}, 'I am in H2 tag')
    //     ]),
    //     React.createElement('div', {id: 'child2'}, [
    //         React.createElement('h1', {}, 'I am h1 tag'),
    //         React.createElement('h2', {}, 'I am h2 tag')
    //     ])
    // ]);

    // const root = ReactDOM.createRoot(document.getElementById('root'));

    // root.render(heading)

    const elem = <span>React Element</span>
    const title = (
        <h1>
        {elem},
        This is jsx element</h1>
    );
    // const Title = () => (
    //     <h1 className="head">This is title </h1>
    // );

    const HeadingComponent = () => (
        <div>
        {/* <Title /> */}
        {title}
        <h1>This is functional HeadingComponent</h1>
        </div>
    );
    // const jsxHeading = (
    // <h1 className="head" >This is JSX heading</h1>,
    // <h2 className="head1" >This is multiple lines in jsx </h2>
    // ) // this is react element
    
    const root= ReactDOM.createRoot(document.getElementById('root'))
    root.render(<HeadingComponent />)