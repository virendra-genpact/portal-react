import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from '../context';


export default function Quotes() {

    const { quotes, isLoading, total_pages, total_entries, per_page } = useGlobalContext();

    if(isLoading) {
        return (
            <>
                <h1> Loading .... </h1>
            </>
        )
    } else {
        console.log(total_pages);
        console.log(total_entries);
        console.log(per_page);
    }

    return(
        <>
            <div className="columns">
                <div className="column">
                    <h4 className="has-text-weight-semibold">
                        Quotes
                    </h4>
                </div>
                <div className="column" style={{textAlign: 'right'}}>
                    <button className="button is-info is-small">
                        Create Quotes
                    </button>
                </div>
            </div>

            <div className="columns">
                <div className="column quote-stats  has-text-centered"> 0 <br/> Approved </div>
                <div className="column quote-stats  has-text-centered"> 604 <br/> Doccumented </div>
                <div className="column quote-stats  has-text-centered"> 964 <br/> Funded </div>
                <div className="column quote-stats  has-text-centered"> $62 <br/> Total Funded </div>
            </div>

            <div className="columns">
                <div className="column"></div>
            </div>

            <div className="table-container">
                <table className="table is-narrow">
                    <thead>
                        <tr>
                            <th><abbr title="Position">Quote #</abbr></th>
                            <th>Customer name</th>
                            <th><abbr title="Played">Requested Amount</abbr></th>
                            <th><abbr title="Won">Term(months)</abbr></th>
                            <th><abbr title="Drawn">Financial Product</abbr></th>
                            <th><abbr title="Lost">Status</abbr></th>
                            <th><abbr title="Goals for">Expiration</abbr></th>
                            <th><abbr title="Goals against">Sales Rep</abbr></th>
                        </tr>
                    </thead>
                    <tfoot>
                        
                    </tfoot>
                    <tbody>
                        {quotes.map(quote => {
                            return (
                                <tr key={ quote.id }>
                                    <th> { quote.portal_number } </th>
                                    <td> { quote.new_customer_name } </td>
                                    <td>$30,032.11</td>
                                    <td>23</td>
                                    <td>$1 Buyout Lease</td>
                                    <td>Accepted</td>
                                    <td> </td>
                                    <td> Mahima vendor rep </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            
            <div className="columns">
                <div className="column">
                    <nav className="pagination is-small" role="navigation" aria-label="pagination">
                        <a className="pagination-previous">Previous</a>
                        <a className="pagination-next">Next page</a>
                        <ul className="pagination-list">
                            <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                            <li><span className="pagination-ellipsis">&hellip;</span></li>
                            <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
                            <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                            <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                            <li><span className="pagination-ellipsis">&hellip;</span></li>
                            <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Outlet/>
        </>
    )
}