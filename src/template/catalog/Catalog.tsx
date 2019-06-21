import * as React from 'react';
import "./Catalog.css";
import Card from '../../components/card/Card';
import { IProduct } from './../../data/ProductInterface';
import Pagination from './../../components/pagination/Pagination';


interface CatalogState {
  products: IProduct[];
}

class Catalog extends React.Component<{},CatalogState> {
  public componentWillMount() {
    const jsonData = require("../../data/products.json");
    this.setState({products: jsonData})
  }
  
  public render() {
    return (
      <div className="catalog">
        <h1>CATALOG</h1>
        {this.state.products.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default Catalog;