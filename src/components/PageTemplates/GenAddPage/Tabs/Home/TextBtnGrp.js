import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../TabContent.css'

const TextBtnGrp = () => (
    <table className="btn-group">
        <tbody>
            <tr>
                <td>
                    <button title="Bold (ctrl + b)">
                        <i className="fa fa-bold"></i>
                    </button>
                </td>
                <td>
                    <button title="Italic (ctrl + i)">
                        <i className="fa fa-italic"></i>
                    </button>
                </td>
                <td>
                    <button title="Underline (ctrl + u)">
                        <i className="fa fa-underline"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <button title="Align text left">
                        <i className="fa fa-align-left"></i>
                    </button>
                </td>
                <td>
                    <button title="Align text center">
                        <i className="fa fa-align-center"></i>
                    </button>
                </td>
                <td>
                    <button title="Align text right">
                        <i className="fa fa-align-right"></i>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
);

export default TextBtnGrp