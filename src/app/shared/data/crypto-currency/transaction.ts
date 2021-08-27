export class TransactionData {
    id?: number;
    icon?: string;
    transaction?: string;
    date?: string;
    from?: string;
    img?: string;
    to?: string;
    coin?: string;
    coinName?: string;
    amount?: number;
    status?: string
}

export const transactionData: TransactionData[] = [
    { id: 1, icon: 'fe-arrow-up-right', transaction:'#1242232401', date: '03/12/2020', from:'Olive Yew', img:'../../assets/img/users/2.jpg', to:'Peg Legge', coin:'../../assets/img/svgs/crypto-currencies/btc.svg', coinName: 'Bitcoin', amount: 0.041, status:'completed' },
    { id: 2, icon: 'fe-arrow-down-left', transaction:'#1242232402', date: '05/12/2020', from:'Addie Minstra', img:'../../assets/img/users/3.jpg', to:'Art Decco', coin:'../../assets/img/svgs/crypto-currencies/eth.svg', coinName: 'Ethereum', amount: -0.344, status:'cancelled' },
    { id: 3, icon: 'fe-arrow-down-left', transaction:'#1242232403', date: '14/12/2020', from:'Stan Dupp', img:'../../assets/img/users/4.jpg', to:'Neil Down', coin:'../../assets/img/svgs/crypto-currencies/xrp.svg', coinName: 'Ripple', amount: -0.345, status:'pending' },
    { id: 4, icon: 'fe-arrow-down-right', transaction:'#1242232404', date: '16/12/2020', from:'Penny Black', img:'../../assets/img/users/5.jpg', to:'Anna Domino', coin:'../../assets/img/svgs/crypto-currencies/dash.svg', coinName: 'Dash', amount: 0.132, status:'completed' },
    { id: 5, icon: 'fe-arrow-down-left', transaction:'#1242232405', date: '18/12/2020', from:'Phil Harmonic', img:'../../assets/img/users/6.jpg', to:'Paul Misunday', coin:'../../assets/img/svgs/crypto-currencies/ltc.svg', coinName: 'litecoin', amount: -0.523, status:'cancelled' },
    { id: 6, icon: 'fe-arrow-down-left', transaction:'#1242232406', date: '20/12/2020', from:'Arty Ficial', img:'../../assets/img/users/7.jpg', to:'Marsha Mello', coin:'../../assets/img/svgs/crypto-currencies/xmr.svg', coinName: 'Monero', amount: -0.232, status:'pending' },
    { id: 7, icon: 'fe-arrow-down-right', transaction:'#1242232407', date: '22/12/2020', from:'Donatella Nobatti', img:'../../assets/img/users/8.jpg', to:'Peg Legge', coin:'../../assets/img/svgs/crypto-currencies/steem.svg', coinName: 'Steem', amount: 0.456, status:'completed' },
    { id: 8, icon: 'fe-arrow-down-left', transaction:'#1242232408', date: '25/12/2020', from:'Juan Annatoo', img:'../../assets/img/users/9.jpg', to:'Jack Dup', coin:'../../assets/img/svgs/crypto-currencies/miota.svg', coinName: 'Iota', amount: 0.232, status:'completed' },
    { id: 9, icon: 'fe-arrow-down-left', transaction:'#1242232409', date: '25/12/2020', from:'Stew Gots', img:'../../assets/img/users/10.jpg', to:'Sara Bellum', coin:'../../assets/img/svgs/crypto-currencies/waves.svg', coinName: 'Waves', amount: -0.232, status:'pending' },
    { id: 10, icon: 'fe-arrow-down-right', transaction:'#1242232410', date: '28/12/2020', from:'Anna Rexia', img:'../../assets/img/users/11.jpg', to:'Marge Arita', coin:'../../assets/img/svgs/crypto-currencies/neo.svg', coinName: 'Neo', amount: -0.344, status:'cancelled' },
    { id: 11, icon: 'fe-arrow-down-left', transaction:'#1242232411', date: '29/12/2020', from:'Matt Innae', img:'../../assets/img/users/12.jpg', to:'Barry Cuda', coin:'../../assets/img/svgs/crypto-currencies/eos.svg', coinName: 'Eos', amount: -0.231, status:'cancelled' },
    { id: 12, icon: 'fe-arrow-down-right', transaction:'#1242232412', date: '30/12/2020', from:'Gabe Lackmen', img:'../../assets/img/users/1.jpg', to:'Marion Gaze', coin:'../../assets/img/svgs/crypto-currencies/eur.svg', coinName: 'Euros', amount: 0.124, status:'completed' },
    { id: 13, icon: 'fe-arrow-down-left', transaction:'#1242232413', date: '31/12/2020', from:'Jim Nasium', img:'../../assets/img/users/1.jpg', to:'Marcus Down', coin:'../../assets/img/svgs/crypto-currencies/btc.svg', coinName: 'Bitcoin', amount: -0.241, status:'pending' },
    { id: 14, icon: 'fe-arrow-down-right', transaction:'#1242232414', date: '02/01/2021', from:'Ella Vator', img:'../../assets/img/users/2.jpg', to:'Gene Jacket', coin:'../../assets/img/svgs/crypto-currencies/eth.svg', coinName: 'Ethereum', amount: 0.134, status:'completed' },
    { id: 15, icon: 'fe-arrow-down-left', transaction:'#1242232415', date: '04/01/2021', from:'Bart Ender', img:'../../assets/img/users/3.jpg', to:'Marty Graw', coin:'../../assets/img/svgs/crypto-currencies/xrp.svg', coinName: 'Ripple', amount: -0.244, status:'pending' },
]