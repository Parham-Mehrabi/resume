export default function Contact() {
    return (
        <div className='container'>

            <div className='table-responsive p-0 m-0 p-sm-1 m-sm-1 p-md-3 m-md-3'>
                <table className='table align-middle table-hover table-borderless border border-success-subtle border-2'>
                    <tbody>
                    <tr>
                        <td className='text-center'>Email Address</td>
                        <td className='text-center'><a href="mailto:parham.mehrabi.webdev@gmail.com"
                                                       className='text text-info text-decoration-none'>parham.mehrabi.webdev@gmail.com</a>
                        </td>
                    </tr>
                    <tr>
                        <td className='text-center'>WhatsApp</td>
                        <td className='text-center text-info'>00989033171064</td>
                    </tr>
                    <tr>
                        <td className='text-center'>Telegram</td>
                        <td className='text-center'><a href="https://t.me/parham_webdev"
                                                       className='text text-info text-decoration-none'>@parham_webdev</a>
                        </td>
                    </tr>
                    <tr>
                        <td className='text-center'>Phone Number (main)</td>
                        <td className='text-center text-info'>00989033171064</td>
                    </tr>
                    <tr>
                        <td className='text-center'>Phone Number (secondary)</td>
                        <td className='text-center text-info'>00989304854344</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className='small'>
            <p className='text text-white-50'>
                i have telegram and whatsApp installed on both my phone_numbers, and ' Parham Mehrabi Pour ' is my LinkedIn username although im not active on it
            </p>
            <p className='text text-white-50'>
                Check my GitHub at <a href="https://github.com/Parham-Mehrabi ">github.com/Parham-Mehrabi</a>
            </p>
            </div>
        </div>
    )
}