import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../TabContent.css'

const PreviewBtnGrp = () => (
    <table className="btn-group">
        <tbody>
            <tr>
                <td>
                    <button title="Preview only what user will see">
                        Main Page
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <button title="Preview how your page will look in search result">
                        Search Result
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
);

export default PreviewBtnGrp