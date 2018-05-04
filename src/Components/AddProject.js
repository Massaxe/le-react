import React, { Component } from 'react';
import ProjectItem from "./ProjectItem"

class AddProject extends Component {

    constructor() {
        super()
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ["Web Design", "Mobile Development", "Web Development"]
    }

    handleSubmit(e) {
        if (this.refs.title.value === "") {
            alert("Title empty")
        }
        else {
            this.setState({
                newProject: {
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, () => {
                console.log(this.state)
            })
        }
        e.preventDefault()
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        })
        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label>
                        <br />
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Category</label>
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div >
        );
    }
}

export default AddProject;
