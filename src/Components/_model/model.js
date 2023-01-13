class MyClass extends React.Component {
    componentDidMount() {
      let value = this.context;
      /* perform a side-effect at mount using the value of MyContext */
    }
    componentDidUpdate() {
      let value = this.context;
      /* ... */
    }
    componentWillUnmount() {
      let value = this.context;
      /* ... */
    }
    render() {
      let value = this.context;
      /* render something based on the value of MyContext */
    }
  }
  MyClass.contextType = MyContext;