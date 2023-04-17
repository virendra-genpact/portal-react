import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Pagination from '../Pagination';


export default function Quotes() {

    const [currentPage, setCurrentPage] = useState(1);
    const { quotes, isLoading, total_pages, total_entries, per_page } = useGlobalContext();

    if(isLoading) {
        return (
            <>
                <h1> Loading .... </h1>
            </>
        )
    } else {
        console.log('quotes :');
        console.log(quotes);
        console.log('TOTOAL PAGES :');
        console.log(total_pages);
        console.log('TOTAL ETRIES :');
        console.log(total_entries);
        console.log('PER PAGE :');
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
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={quotes.length}
                        pageSize={per_page}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>
            <Outlet/>
        </>
    )
}