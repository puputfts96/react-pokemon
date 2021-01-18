import firebase from "./firebase";
// console.log(database);
const db = firebase.database().ref("/pokemons");

class pokemonDatabase {
  getAll() {
    return db;
  }

  getPokemons(id){
    // console.log(id);
    var result=[];
    var starCountRef = firebase.database().ref('pokemons/');
    starCountRef.once('value').then((snapshot) => {
      var data=snapshot.val();
      snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          
          result.push(childData);
      });
      let status=false;
      result.find((element) => {
          if(id.id==element.id && id.name==element.name){
              status=true;
          }
      })
      return status;
     });
  }

  getMyPokemons(){
    var result=[];
    let arr={};
    let name='';
    var starCountRef = firebase.database().ref('pokemons/');
    starCountRef.once('value').then((snapshot) => {
      var data=snapshot.val();
      snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
      //     arr={
      //       id: childData.id,
      //       name: childData.name
      //     }
      // console.log(arr);

          result.push(childData);
      });
      console.log(result);
      return result;
     });
  }

  create(pokemon) {
    return db.push(pokemon);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new pokemonDatabase();