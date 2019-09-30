import React, {Component} from 'react';

export default class ToDoItemList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {
                    this.props.items.map((item, index) => (
                        <li key={index}>
                        {
                            this.props.updateItemIndex !== index ? (
                            <span>
                                {item}
                                <button onClick={this.props.selectItemToEdit.bind(null, index)}>edit</button>
                                <button onClick={this.props.removeItem.bind(null, index)}>x</button>
                            </span>
                            )
                            : (
                            <span>
                                <input type="text" value={this.props.updateItemValue} onChange={this.props.handleUpdateItemChange}/>
                                <button onClick={this.props.updateItem}>Update</button>
                            </span>
                            )
                        }
                        </li>
                    ))
                }
            </ul>
        )
    }
}