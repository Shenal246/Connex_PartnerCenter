import React from 'react';
import './table.css';

function Table({ columns, data,   height, topic }) {
    return (
        <div className='tbls'>

            <div className="reusableprcard" style={{  height }}>
                <h3 className="reusableprcard-topic">{topic}</h3>

                <table className="table">
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th key={column.accessor}>{column.header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column) => (
                                    <td key={column.accessor}>{row[column.accessor]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>


        </div>
    );
}

export default Table;
