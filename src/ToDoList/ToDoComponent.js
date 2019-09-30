import React, {Component} from 'react';
import {connect} from 'react-redux';
import {INSERT, REMOVE, UPDATE} from './ToDoActionsList';
import ToDoItemList from './ToDoItemList';

class ToDoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new_item: '',
            update_item_index: '',
            update_item_value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.insertNewItems = this.insertNewItems.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.selectItemToEdit = this.selectItemToEdit.bind(this);
        this.handleUpdateItemChange = this.handleUpdateItemChange.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    insertNewItems() {
        if(this.state.new_item !== '') {
            this.props.dispatch({
                type: INSERT,
                payload: {
                    item:this.state.new_item
                }
            });
            this.setState({new_item:''});
        }
    }
    
    removeItem(index) {
        this.props.dispatch({
            type: REMOVE,
            payload: {
                item_index:index
            }
        })
    }

    selectItemToEdit(index) {
        this.setState({
            update_item_index: index,
            update_item_value: this.props.items[index]
        });
    }

    handleUpdateItemChange(e) {
        this.setState({update_item_value: e.target.value})
    }

    handleChange(e) {
        this.setState({new_item:e.target.value});
    }

    updateItem() {
        this.props.dispatch({
            type: UPDATE,
            payload: {
                item_index: this.state.update_item_index,
                item_value: this.state.update_item_value
            }
        });
        this.setState({
            update_item_index: '',
            update_item_value: ''
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.new_item}/>
                <button onClick={this.insertNewItems}>Add</button>
                <ToDoItemList items={this.props.items} removeItem={this.removeItem} selectItemToEdit={this.selectItemToEdit} updateItemIndex={this.state.update_item_index} updateItemValue={this.state.update_item_value} updateItem={this.updateItem} handleUpdateItemChange={this.handleUpdateItemChange} />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    items:state.itemsReducer.items
});

export default connect(mapStateToProps)(ToDoComponent);
