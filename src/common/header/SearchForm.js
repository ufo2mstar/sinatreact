import React from 'react'
import {Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label} from "reactstrap";
import FontAwesome from 'react-fontawesome'

// import querystring from 'query-string';
// import Redirect from "react-router-dom/es/Redirect";
import withRouter from "react-router-dom/es/withRouter";

class SearchForm extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {value: '', searched: false, target: '',};
    // }

    state = {value: '', searched: false, target: '',};

    handleChange = (event) => {
        this.setState({value: event.target.value, searched: false, target: '',});
        // console.log(event);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // alert('A name was submitted: ' + this.state.value);
        let target = `/query/${this.state.value}`;
        console.log(`going to: ${target}`);
        this.setState({searched: true, target: this.state.value,});
        this.props.history.push(target);
        // return;
    };

    render() {
        let inpClass = 'bg-dark text-light';
        let btnClass = 'primary';
        // let btnClass = 'warning';
        // inpClass = '' // for default search look

        // const {from} = this.props.location.state || '/';
        // console.log('kod:');
        // console.log(from + ': ' + this.state.target);
        // const {fireRedirect} = this.state.searched;

        return (
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="appSearch" hidden>ECI/ARR</Label>
                        <InputGroup>
                            <Input className={inpClass} id="appSearch" placeholder="ECI or ARR ID..."
                                   type="text" value={this.state.value} onChange={this.handleChange}/>
                            {/*<Input className={''} id="exampleEmail" placeholder="any..."/>*/}
                            <InputGroupAddon addonType="append">
                                <Button color={btnClass}>
                                    <FontAwesome name="search" size="lg"/>
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </FormGroup>
                    {' '}
                </Form>
                {/*<Redirect to={target}/>*/}
                {/*{fireRedirect && (*/}
                {/*<Redirect to={from || this.state.target}/>*/}
                {/*)}*/}
            </div>
        );
    }
}

export default withRouter(SearchForm)
