import * as React from 'react'
import { render } from 'react-dom'
class Main extends React.Component{
    render():React.ReactNode{
        return <h1>There will be a day</h1>
    }
}
render(<Main></Main>,document.getElementById('react-root'));