import * as React from "react";
import { Link } from "react-router-dom";
import "./Pagination";
import { IProduct } from "../../data/ProductInterface";

interface IPaginationProps {
  data: IProduct[];
  current: IProduct;
}

class Pagination extends React.Component<IPaginationProps> {
  constructor(props: IPaginationProps) {
    super(props);
  }

  public render() {
    const nextProduct = this.GetNextProduct();
    const prevProduct = this.GetPrevProduct();

    const step = 100 / this.props.data.length;

    console.log(step);

    return (
      <div className="pagination">
        <div className="pagination-progress">
          <div style={{ width: this.GetCurrentIndex() * step + "%" }} />
        </div>
        {prevProduct ? (
          <Link
            className="pagination__button pagination__button--prev"
            to={`/product/${prevProduct.slug}`}
          >
            <i className="fas fa-chevron-left" />
          </Link>
        ) : null}
        {nextProduct ? (
          <Link
            className="pagination__button pagination__button--next"
            to={`/product/${nextProduct.slug}`}
          >
            <i className="fas fa-chevron-right" />
          </Link>
        ) : null}
      </div>
    );
  }

  private GetCurrentIndex(): number {
    const prodcut: IProduct = this.props.current;
    const data: IProduct[] = this.props.data;
    const productIndex = data.indexOf(prodcut) + 1;
    return productIndex;
  }

  private GetNextProduct(): IProduct | null {
    const product: IProduct = this.props.current;
    const data: IProduct[] = this.props.data;
    let result: IProduct | null;
    if(product){
      const productIndex = data.indexOf(product);
      const nextProductIndex = productIndex + 1;
      result = data[nextProductIndex];;
    }else{
      result = null;
    }    
    return result;
  }

  private GetPrevProduct(): IProduct | null {
    const product: IProduct = this.props.current;
    const data: IProduct[] = this.props.data;
    let result: IProduct | null;
    if(product){
      const productIndex = data.indexOf(product);
      const nextProductIndex = productIndex - 1;
      result = data[nextProductIndex];;
    }else{
      result = null;
    }    
    return result;
  }
}

export default Pagination;
