import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {bindActionCreators} from 'redux';
import AddModal from './AddModal';
import {connect} from 'react-redux';
import {
  getDataFunction,
  addDataFunction,
  updateDataFunction,
  deleteDataFunction,
} from '../../Services/action';
import RenderItem from './RenderItem';
class ApiCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AddModelVisiblity: false,
      EditModelVisiblity: false,
      id: '',
    };
  }

  componentDidMount() {
    this.props.getDataFunction();
  }
  addModelVisble = (visible) => {
    this.setState({...this.state, AddModelVisiblity: visible});
  };
  addModelToggler = () => {
    this.addModelVisble(true);
  };
  editModelVisble = (visible, id) => {
    this.setState({...this.state, EditModelVisiblity: visible, id: id});
  };
  editModelToggler = (id) => {
    this.editModelVisble(true, id);
  };
  render() {
    const {
      addDataFunction,
      deleteDataFunction,
      updateDataFunction,
    } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <View>
            <Text style={styles.txt}>Api List</Text>
          </View>
          <TouchableOpacity
            style={styles.add}
            onPress={() => this.addModelToggler()}>
            <Image
              style={styles.img}
              source={require('../../assets/add.png')}
            />
          </TouchableOpacity>

          <AddModal
            visible={this.state.AddModelVisiblity}
            close={() => this.addModelVisble(false)}
            addFunction={this.props.addDataFunction}
          />
        </View>
        <FlatList
          data={this.props.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <RenderItem
              item={item}
              deleteItem={deleteDataFunction}
              update={updateDataFunction}
              visible={this.state.EditModelVisiblity}
              push={this.editModelToggler}
              id={this.state.id}
              close={() => this.editModelVisble(false)}
            />
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  img: {
    height: 50,
    width: 50,
  },
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getDataFunction,
      addDataFunction,
      updateDataFunction,
      deleteDataFunction,
    },
    dispatch,
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.Api.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ApiCall);
