import { connect } from 'react-redux';

function incrementCounter(num) {
    return {
        type: "INCREMENT",
        num: num
    }
}

function decrementCounter(num) {
    return {
        type: "DECREMENT",
        num: num
    }
}

function mapStatetoProps(state) {
    return {
        count: state.count
    }
}

const mapDispatchToProps={
 incrementCounter,
 decrementCounter
}

function Counter(props) {
    function incerementHandler(){
        props.incrementCounter(1);
    }
    function decerementHandler(){
        props.decrementCounter(1);
    }
    return (
        <div>
            <h1>{props.count}</h1>
            <div>
                <button onClick={incerementHandler}>+</button>
                <button onClick={decerementHandler}>-</button>
            </div>
        </div>
    )
}

export default connect(mapStatetoProps,mapDispatchToProps)(Counter);