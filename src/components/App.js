import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Header from './common/header';
import { getToken } from "../actions/auth";
import AuthService from '../services/auth-service';

const user = 'admin';
const password = '123456';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("didMount");
        AuthService.getToken(user, password);

        // const { getToken } = this.props;
        // this.props.getToken(user, password);
    }

    render() {
        return (
            <div className="container-fluid">
                <Header />
                {/* {this.props.children} */}
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
      getToken: (u, p) => dispatch(getToken(u, p)),
    }
  }

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default connect(
    null,
    mapDispatchToProps
  )(App)
  