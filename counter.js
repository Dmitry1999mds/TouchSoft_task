'use strict';

const e = React.createElement;

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: 0,
    }
  }

minus = () => {
	this.setState(({current}) => {
		if (current === 0){
			return {current: current}
		} else {
			return {current: current - 1, }
		}	
	})
}

reset = () => {
	this.setState(({current}) => ({
		current: 0,
	}))
}
plus = () => {
	this.setState(({current}) => ({
		current: current + 1,
	}))
}

render(){
	const {current} = this.state;

	let color, evenNumber;
	if (current % 2 === 0){
		color = '#5f73ba';
		evenNumber = 'Введенно чётное число';
	} else {
		color = '#22bfbf';
		evenNumber = 'Введенно нечётное число';
	}

    return(
      <div className="counter" style={{backgroundColor: color}}>
        <div className="container">
          <div className="block">
            <div className="block__current">{current}</div>
            <div className="block__even">{evenNumber}</div>
            <div className="block__groupBtn">
              <button className="block__btn-minus btn" onClick={this.minus}>-</button>
              <button className="block__btn-reset btn" onClick={this.reset}>reset</button>
              <button className="block__btn-plus btn" onClick={this.plus}>+</button>
            </div>
          </div>
        </div>
      </div>
    )
	}	
}

ReactDOM.render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>,
  document.getElementById('root')
);