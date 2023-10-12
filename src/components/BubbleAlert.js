import { Component } from "react";

const styles = {
    bubbleAlert: {
        backgroundColor: 'red',
        color:'white',
        borderRadius: '20px',
        border: 'none',
        padding: '2px 8px',
    }
}

class BubbleAlert extends Component{
    getNumber(n){
        if(!n){
            return ''
        }
        return n > 9 ? '9+': n
    }


    render(){
        const { value } = this.props
        return(
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }

}

export default BubbleAlert;