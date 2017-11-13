import React from 'react'
import '../Form.css'

class Form extends React.Component {

  constructor() {
    super()
    this.handleForm = this.handleForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.clearResults = this.clearResults.bind(this)
    this.state = {
      first_name: '',
      last_name: '',
      email_address: '',
      password: '',
      renderResult: false
    }
  }


  handleForm(e) {
    e.preventDefault()

    const formData = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email_address: e.target.email_address.value,
      password: e.target.password.value
    }

    this.setState({
      first_name: '',
      last_name: '',
      email_address: '',
      password: '',
      renderResult: true,
      formData: formData
    })
  }

  handleChange(e) {
    const target = e.target
    const name = target.name
    this.setState({[name]: target.value})

  }

  clearResults(){
    this.setState({
      first_name: '',
      last_name: '',
      email_address: '',
      password: '',
      renderResult: false
    })
  }


  render() {
    return (
      <div className="form-display">
        <form className='Form' onSubmit={this.handleForm}>
          <h2>Sign up here for the goodness</h2>
          <input type="text" name="first_name" value={this.state.first_name} placeholder="First Name" onChange={this.handleChange}/>
          <input type="text" name="last_name" value={this.state.last_name} placeholder="Last Name" onChange={this.handleChange}/>
          <input type="email" name="email_address" value={this.state.email_address} placeholder="Email Address" onChange={this.handleChange}/>
          <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange}/>
          <button type='Submit'>Create Account</button>
        </form>
        <div className="result">
          {this.state.renderResult ? <div>
            <h2> Name: {this.state.formData.first_name} {this.state.formData.last_name}</h2>
            <h2> Email: {this.state.formData.email_address}</h2>
            <h2> Password: {this.state.formData.password}</h2>
            <button onClick={this.clearResults}>Clear results</button>
          </div> : <h2>No data submitted</h2>}
        </div>
      </div>
        )
  }
}



export default Form
