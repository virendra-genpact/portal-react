import React, { useState, useEffect } from 'react';


export default function Quotes() {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://macquarie-dev.staging.gfincloud.com/rest/get/quote.xml')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


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

            <div className="columns">
                <table className="table">
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
                        <tr>
                            <th>471146 </th>
                            <td>This is a new Customer</td>
                            <td>$30,032.11</td>
                            <td>23</td>
                            <td>$1 Buyout Lease</td>
                            <td>Accepted</td>
                            <td> </td>
                            <td> Mahima vendor rep </td>
                        </tr>
                        <tr>
                            <th>471146 </th>
                            <td>This is a new Customer</td>
                            <td>$30,032.11</td>
                            <td>23</td>
                            <td>$1 Buyout Lease</td>
                            <td>Accepted</td>
                            <td> </td>
                            <td> Mahima vendor rep </td>
                        </tr>
                        <tr>
                            <th>471146 </th>
                            <td>This is a new Customer</td>
                            <td>$30,032.11</td>
                            <td>23</td>
                            <td>$1 Buyout Lease</td>
                            <td>Accepted</td>
                            <td> </td>
                            <td> Mahima vendor rep </td>
                        </tr>
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
        </>
    )
}