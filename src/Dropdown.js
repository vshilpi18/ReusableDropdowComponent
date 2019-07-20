import React from 'react';

export default class Dropdown extends React.Component {
    render() {
        const {name,id,classes,options,labelName} = this.props;
        return(
            <div>
                <label htmlFor={id}>{labelName}</label>
                <select name={name} id={id} className={classes}>
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
        );
    }
}