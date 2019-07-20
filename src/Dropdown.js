import React from 'react';

export default class Dropdown extends React.Component {
    render() {
        const { name, id, classes, options, labelName, onchange } = this.props;
        return (
            <div>
                {/* It is a reusable component for dropdown.Throughout the project it can b use.
                */}
                <div>
                <label style={{"float":"center"}} className="drp_dd">Dynamic Dropdown</label>
                </div>
                <div className="drp_dd2">
                    <label htmlFor={id}>{labelName}</label>  &nbsp; &nbsp;
                    <select name={name} className={classes} onChange={onchange}>
                        <option>Select an option</option>
                        {
                            (options !== undefined && options.length > 0)
                                ?
                                options.map(option => (
                                    <option key={option.id} value={option.id}>
                                        {option.name}
                                    </option>
                                ))
                                :
                                ''
                        }
                    </select>
                </div>
            </div>
        );
    }
}
