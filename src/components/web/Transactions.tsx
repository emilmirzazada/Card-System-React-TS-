import React from "react"
import { TransactionParams } from './../../utils/interfaces/Params.interface';
import Loading from './../helpers/Loading/index';
import { getTransactions } from "../../utils/services/transaction";
import { getUserId } from "../../utils";

function Transactions() {
    const [loading, setLoading] = React.useState(true);
    const [transactions, setTransactions] = React.useState([]);

    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)

        try {
            const { data, status } = await getTransactions(getUserId())
            if (status === 200) {
                setTransactions(data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }



    return (
        <Loading isLoading={loading}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Client</th>
                        <th scope="col">Card number</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Vendor</th>
                        <th scope="col">Create Date</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length ? (
                        <>
                            {transactions.map((transaction: TransactionParams, index: any) =>
                                <tr key={index}>
                                    <td>{transaction.client.userName}</td>
                                    <td>{transaction.card.number}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.vendor.name}</td>
                                    <td>{new Date(transaction.createdAt).toISOString().substring(0, 10)}</td>
                                    <td>{transaction.typeName}</td>
                                    <td>{transaction.statusName}</td>
                                </tr>
                            )}
                        </>
                    ) : (
                        <p>empty</p>
                    )}
                </tbody>
            </table>

        </Loading>
    )
}

export default Transactions
