import { connect } from 'react-redux';
import { fetchCategories } from '../actions'
import navList from '../components/navList';

const mapDispatchToProps = (dispatch) => ({
  onTap: () => dispatch(fetchCategories()),
  onClick: () => dispatch(fetchCategories())
})

export default connect(mapDispatchToProps)(navList);