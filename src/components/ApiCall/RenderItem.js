import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import EditModal from './EditModal';
const width = Dimensions.get('window').width;
class RenderItem extends React.Component {
  render() {
    const {item, deleteItem, update} = this.props;
    return (
      <View style={styles.card}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.txt}>ID: {item.id}</Text>
          </View>
          <View style={styles.rowButtons}>
            <View>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => this.props.push(item.id)}>
                <Image
                  style={styles.img}
                  source={require('../../assets/edit.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => deleteItem(item.id)}>
              <Image
                style={styles.img}
                source={require('../../assets/delete.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.txt}>Title: {item.title}</Text>
          </View>
          <View>
            <Text style={styles.txt}>Body: {item.body}</Text>
          </View>
        </View>
        <EditModal
          visible={this.props.visible}
          close={() => this.props.close()}
          editFunction={this.props.update}
          id={this.props.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: width - 10,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#F9F9F9',
    borderColor: '#F8F8F8',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 2,
  },
  topRow: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowButtons: {
    flexDirection: 'row',
  },
  txt: {
    fontSize: 20,
  },
  img: {
    height: 20,
    width: 20,
  },
  circle: {
    padding: 10,
    marginLeft: 5,
    borderRadius: 15,
    backgroundColor: '#F2F2F2',
  },
});

export default RenderItem;
