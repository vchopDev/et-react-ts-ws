import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IProduct } from "../../data/ProductInterface";
import Pagination from "../../components/pagination/Pagination";
import Card from "../../components/card/Card";

interface IDetailState {
  products: IProduct[];
  currentProdcut: IProduct;
}

type DetailProps = RouteComponentProps<{slug: string}>;

class Detail extends React.Component<DetailProps, IDetailState> {
  
  constructor(props: DetailProps) {
    super(props);  
  }

  public componentWillMount() {
    const jsonData = require("../../data/products.json");
    this.setState({products: jsonData})
  }

  public componentDidMount() {
    if(this.props.match.params.slug) {
      const productSlug = this.props.match.params.slug;
      const prodcut = this.state.products.filter(p => p.slug === productSlug)[0];
      this.setState({currentProdcut: prodcut});
    }
  }

  public render() {
    return (
      <div className="catalog catalog--single">
        <Pagination current={this.state.currentProdcut} data={this.state.products} />
        <Card {...this.state.currentProdcut} />
        {/* <pre>{JSON.stringify(product, "", 2)}</pre> */}
      </div>
    );
  }
}


export default Detail;