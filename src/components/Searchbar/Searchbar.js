import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    name: '',
  }
  handleChange = e => {
    this.setState({ name: e.currentTarget.value.toLowerCase() });
    };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === '') {
      toast.error('Enter name image.');
      return;
    }
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
    }

    render() {
    const { name } = this.state;
    return (
      <>
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <input
          className={s.input}
          type="text"
          value={name}
          onChange={this.handleChange}
          placeholder="Search images and photos"
          />

          <button type="submit" className={s.button} >
            <span className={s.buttonLabel}>Search</span>
          </button>
        </form>
      </header>
      </>
      );
    }
}

export default Searchbar;
