import React from 'react'
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import {fetch} from "../src/helper/request-helper";

export default class SharePage extends React.Component{
    static async getInitialProps(context) {
   //     const { pathname, query, isServer, req, callback } = context;

       const result = await fetch({
            uri: 'https://aaxisproducttest.azureedge.net//public/html/1393828675178.html',
            method: 'get',
        })
        return {
           htmlContent: result.data
        };
    }

    render() {
      //  console.log('this.props', this.props)
        return (
          <div>
            <Header />
            <p>Share Components</p>
            <Footer content={this.props.htmlContent} />
          </div>)
    }
}
