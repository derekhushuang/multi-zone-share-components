import React from 'react'

class Footer extends React.Component{

    render(){
        const { content } = this.props
        if(!content){
            return (
                <p> This is the share component default footer </p>
            )
        }
        return (
            <div dangerouslySetInnerHTML={{__html: content}}>
            </div>
        )
    }
}

export default Footer