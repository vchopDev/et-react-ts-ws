import * as React from "react";
import "./Counter.css"


interface ICounterProps {
  productId: number;
}

interface ICounterState {
  count: number;
}


class Counter extends React.Component<ICounterProps, ICounterState> {
  constructor(props: ICounterProps) {
    super(props);
  }

  public componentDidMount() {
    if (this.props.productId) {
      this.SetCounterFromLocalStorage();
    }
  }

  public componentWillMount() {
    this.setState({
      count: 0
    });
  }

  public componentWillUnmount() {
    window.removeEventListener("storage", this.SetCounterFromLocalStorage);
  }

  public render() {
    let button: any;
    const count = this.state.count;
    console.log("count:", count)
    if (count > 0) {
      button = (
        <React.Fragment>
          <button
            onClick={this.HandleIncrement}
            className="counter__button counter__button--primary"
          >
            Another one!
                </button>
          <button
            onClick={this.HandleDecrement}
            className="counter__button counter__button--secondary"
          >
            No, I suck!
                </button>
        </React.Fragment>
      )
    } else {
      button = (
        <React.Fragment>
          <button onClick={this.HandleIncrement} className="counter__button">
            I want one!
                </button>
        </React.Fragment>
      );
    }
    return (
      <div className="counter">
        <div className="counter__text counter__text--primary"> {count} </div>
        <button
          onClick={this.HandleIncrement}
          className="counter__button counter__button--primary"
        >
          Another one!
            </button>
        <button
          onClick={this.HandleDecrement}
          className="counter__button counter__button--secondary"
        >
          No, I suck!
            </button>
      </div>
    );
  }

  private SetCounterFromLocalStorage = () => {
    const count: any = window.localStorage.getItem("product-quantity-" + this.props.productId);

    // tslint:disable-next-line: curly
    if (count !== null)
      this.setState({ count: parseFloat(count || 0) })

  }

  private SaveCountOnStorage(count: number) {
    this.setState({ count }, () => {

      // tslint:disable-next-line: curly
      if (this.props.productId)
        window.localStorage.setItem("product-quantity-" + this.props.productId, count.toString());
    })
  }

  private HandleIncrement = () => {
    this.SaveCountOnStorage(this.state.count + 1);
  }

  private HandleDecrement = () => {
    this.SaveCountOnStorage(this.state.count - 1);
  }
}

export default Counter;